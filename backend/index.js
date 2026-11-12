import env from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";
import GoogleStrategy from "passport-google-oauth2";
import { v4 as uuidv4 } from "uuid";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import connectPgSimple from "connect-pg-simple";
import serverless from "serverless-http";

env.config();

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

const app = express();
// const port = 3000;
const saltRounds = 10;
const { Pool } = pg;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// console.log(cloudinary.config());

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  max: 2,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

const PgSession = connectPgSimple(session);

const sessionStore = new PgSession({
  pool: db,
  tableName: "user_sessions",
  createTableIfMissing: true,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => ({
    folder: "MyDiary/profile-images",
    public_id: `${req.user.id}-profile`,
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    overwrite: true,
    resource_type: "image",
  }),
});

const upload = multer({ storage });

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://my-diary-tau.vercel.app",
      "https://mydiaryweb.com",
      "https://my-diary-rap1jqy3a-yugants-projects.vercel.app",
    ],
    methods: "GET,POST,DELETE,PUT",
    credentials: true,
  }),
);

const isProduction = process.env.NODE_ENV === "production";

app.set("trust proxy", 1);

app.use(
  session({
    store: sessionStore,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: isProduction ? "none" : "lax",
      secure: isProduction,
    },
  }),
);

app.use(passport.initialize());
app.use(passport.session());

// Middleware to verify user authentication
const requireAuth = (req, res, next) => {
  if (req.isAuthenticated && req.isAuthenticated() && req.user) {
    return next();
  }

  return res.status(401).json({
    error: "Not authenticated",
  });
};

app.post("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.session.destroy(() => {
      res.clearCookie("connect.sid");
      res.status(200).json({ message: "Logged out successfully" });
    });
  });
});

// Fetch diary entries belonging to the authenticated user
app.get("/api/mydiary/:user_id", requireAuth, async (req, res) => {
  try {
    const result = await db.query(
      `SELECT id, dt AT TIME ZONE 'UTC' AS dt,
       sub, cont, entry_no, liked, mood
       FROM diary_entries
       WHERE user_id = $1
       ORDER BY dt DESC, id DESC`,
      [req.user.id],
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching diary entries:", error);
    res.status(500).json({
      error: "An error occurred while fetching diary entries.",
    });
  }
});

app.get("/mydiary", (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect(`${FRONTEND_URL}/home`);
  } else {
    res.redirect("/login");
  }
});

app.get("/api/get-liked", requireAuth, async (req, res) => {
  try {
    const result = await db.query(
      `SELECT id, dt AT TIME ZONE 'UTC' AS dt,
       sub, cont, entry_no, liked
       FROM diary_entries
       WHERE liked = true AND user_id = $1
       ORDER BY dt DESC, id DESC`,
      [req.user.id],
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching liked entries:", error);
    res.status(500).json({
      error: "An error occurred while fetching liked entries.",
    });
  }
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
);

app.get(
  "/auth/google/mydiary",
  passport.authenticate("google", {
    successRedirect: "/mydiary",
    failureRedirect: "/login",
  }),
);

app.get("/api/user", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      user_id: req.user.id,
      username: req.user.diary_name,
      creation_date: req.user.created_at,
      profile_image: req.user.profile_image,
    });
  } else {
    res.status(401).json({ error: "Not authenticated" });
  }
});

app.get("/api/:id", requireAuth, async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.query(
      `SELECT id, dt AT TIME ZONE 'UTC' AS dt,
       sub, cont, entry_no
       FROM diary_entries
       WHERE id = $1 AND user_id = $2`,
      [id, req.user.id],
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        error: "Diary entry not found.",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching diary entry:", error);
    res.status(500).json({
      error: "An error occurred while fetching the diary entry.",
    });
  }
});

//feedback
app.post("/feedback", async (req, res) => {
  const { name, email, type, message } = req.body;

  try {
    await db.query(
      `
            INSERT INTO feedback
            (name,email,feedback_type,message)
            VALUES($1,$2,$3,$4)
            `,
      [name, email, type, message],
    );

    res.json({
      success: true,
      message: "Feedback submitted successfully.",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

app.post(
  "/upload-image",
  requireAuth,
  upload.single("image"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          message: "No file received",
        });
      }

      const imageUrl = req.file.path;

      await db.query("UPDATE userdata SET profile_image = $1 WHERE id = $2", [
        imageUrl,
        req.user.id,
      ]);

      res.json({
        message: "Uploaded successfully",
        path: imageUrl,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
);

app.post("/toggle-like", requireAuth, async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({
      error: "Entry ID is required.",
    });
  }

  try {
    const result = await db.query(
      `UPDATE diary_entries
       SET liked = NOT liked
       WHERE id = $1 AND user_id = $2
       RETURNING liked`,
      [id, req.user.id],
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        error: "Diary entry not found.",
      });
    }

    res.status(200).json({
      success: true,
      liked: result.rows[0].liked,
    });
  } catch (error) {
    console.error("Error toggling like:", error);
    res.status(500).json({
      error: "Internal server error.",
    });
  }
});

app.post("/register", async (req, res, next) => {
  const { email, display_name, diary_username, password } = req.body;
  // console.log(req.body);
  if (!email || !password || !display_name || !diary_username) {
    return res.status(400).send("All fields are required!");
  }

  const response = await db.query("SELECT * FROM userdata WHERE username=$1", [
    diary_username,
  ]);
  if (response.rows.length > 0) {
    res.status(409).json({ message: "User Already existed!!" });
  } else {
    const userId = uuidv4();
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    try {
      const result = await db.query(
        "INSERT INTO userdata (id, username, password_hash,diary_name,email) VALUES ($1, $2, $3,$4,$5) RETURNING *",
        [userId, diary_username, hashedPassword, display_name, email],
      );

      const newUser = result.rows[0];

      return res.status(200).json({
        message: "Registered",
        user: {
          id: newUser.id,
          username: newUser.username,
          diary_name: newUser.diary_name,
          email: newUser.email,
          created_at: newUser.created_at,
          profile_image: newUser.profile_image,
        },
      });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).send("An error occurred while registering.");
    }
  }
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error("Passport error:", err);
      return next(err);
    }
    if (!user) {
      console.warn("Login failed:", info?.message);
      return res.status(401).json({ message: info?.message || "Login failed" });
    }

    req.login(user, (err) => {
      if (err) {
        console.error("Login session error:", err);
        return next(err);
      }

      return res.status(200).json({
        message: "Logged in",
        user_id: user.id,
        diary_name: user.diary_name,
        creation_date: user.created_at,
      });
    });
  })(req, res, next);
});

app.post("/api/submit", requireAuth, async (req, res) => {
  const { dt, sub, cont, mood } = req.body;

  if (!dt || !sub || !cont || !mood) {
    return res.status(400).json({
      error: "All fields are required!",
    });
  }

  try {
    const entryId = uuidv4();
    const utcDate = new Date(dt).toISOString();
    const userId = req.user.id;
    const liked = false;

    const result = await db.query(
      "SELECT COUNT(*) FROM diary_entries WHERE user_id = $1",
      [userId],
    );

    const entryNo = Number(result.rows[0].count) + 1;

    await db.query(
      `INSERT INTO diary_entries
       (id, user_id, dt, sub, cont, entry_no, liked, mood)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [entryId, userId, utcDate, sub, cont, entryNo, liked, mood],
    );

    res.status(201).json({
      id: entryId,
      user_id: userId,
      entry_no: entryNo,
      dt: utcDate,
      sub,
      cont,
      liked,
      mood,
    });
  } catch (error) {
    console.error("Error saving diary entry:", error);
    res.status(500).json({
      error: "An error occurred while saving the diary entry.",
    });
  }
});

app.post("/update/recover-username", async (req, res) => {
  const { email, value } = req.body;
  const result = await db.query("Select * from userdata WHERE email = $1", [
    email,
  ]);

  if (result.rows.length > 0) {
    await db.query("UPDATE userdata SET username = $1 WHERE email = $2", [
      value,
      email,
    ]);
    res.status(200).json({ message: "Username updated successfully" });
  } else {
    console.log("User not found");
    res.status(404).json({ message: "User not found!!" });
  }
});

app.post("/update/recover-password", async (req, res) => {
  const { email, value } = req.body;

  const result = await db.query("Select * from userdata WHERE email = $1", [
    email,
  ]);

  if (result.rows.length > 0) {
    const hashed = await bcrypt.hash(value, 10);
    await db.query("UPDATE userdata SET password_hash = $1 WHERE email = $2", [
      hashed,
      email,
    ]);
    res.status(200).json({ message: "Password updated successfully" });
  } else {
    res.status(404).json({ message: "User not found!" });
  }
});

app.delete("/api/delete/:id", requireAuth, async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.query(
      "DELETE FROM diary_entries WHERE id = $1 AND user_id = $2 RETURNING id",
      [id, req.user.id],
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        error: "Diary entry not found.",
      });
    }

    res.status(200).json({
      message: "Deleted successfully!",
    });
  } catch (error) {
    console.error("Error deleting entry:", error);
    res.status(500).json({
      error: "An error occurred while deleting the entry.",
    });
  }
});

passport.use(
  "local",
  new Strategy(async function verify(username, password, cb) {
    try {
      if (!username || !password) {
        return cb(null, false, { message: "Missing credentials" });
      }

      const result = await db.query(
        "SELECT * FROM userdata WHERE username = $1",
        [username],
      );

      if (result.rows.length === 0) {
        return cb(null, false, { message: "User not registered" });
      }

      const user = result.rows[0];
      const match = await bcrypt.compare(password, user.password_hash);

      if (!match) {
        return cb(null, false, { message: "Incorrect password" });
      }

      return cb(null, user);
    } catch (err) {
      return cb(err);
    }
  }),
);

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.API_BASE_URL}/auth/google/mydiary`,
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        const email = profile.emails?.[0]?.value;
        if (!email) {
          console.error("No email returned from Google profile.");
          return cb(new Error("No email found in Google profile"));
        }

        const result = await db.query(
          "SELECT * FROM userdata WHERE username = $1",
          [email],
        );

        if (result.rows.length === 0) {
          const diaryUsername = profile.displayName
            .toLowerCase()
            .replace(/\s+/g, "_");

          const newUser = await db.query(
            "INSERT INTO userdata (username, password_hash, diary_name) VALUES ($1, $2, $3) RETURNING *",
            [email, "googleSignUp", profile.displayName],
          );

          return cb(null, newUser.rows[0]);
        } else {
          return cb(null, result.rows[0]);
        }
      } catch (err) {
        console.error("Google Strategy Error:", err);
        return cb(err);
      }
    },
  ),
);

passport.serializeUser((user, cb) => {
  cb(null, user.id); // just store user ID
});

passport.deserializeUser(async (id, cb) => {
  try {
    const result = await db.query("SELECT * FROM userdata WHERE id = $1", [id]);
    if (result.rows.length > 0) {
      cb(null, result.rows[0]);
    } else {
      cb(new Error("User not found"));
    }
  } catch (err) {
    cb(err);
  }
});

// AWS Lambda handler
export const handler = serverless(app);
