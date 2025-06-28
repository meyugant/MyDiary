import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";
import GoogleStrategy from "passport-google-oauth2";
import env from "dotenv";
import { v4 as uuidv4 } from "uuid";
import multer from "multer";
import path from "path";
import fs from "fs";


const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

// Ensure uploads directory exists
const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const app = express();
const port = 3000;
const saltRounds = 10;
env.config();

// const db = new pg.Client({
//   user: process.env.PG_USER,
//   host: process.env.PG_HOST,
//   database: process.env.PG_DATABASE,
//   password: process.env.PG_PASSWORD,
//   port: process.env.PG_PORT,
// });

const db = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Create this folder in your project root
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, req.user.id + "-profile" + ext); // Save with user ID for uniqueness
  },
});

const upload = multer({ storage: storage });

db.connect();

// app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:5173",
        "https://my-diary-tau.vercel.app",
        ],
    methods: "GET,POST,DELETE,PUT",
    credentials: true, // important for cookies/session
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
      sameSite: "lax",            // 🚨 required for cross-origin cookies
      secure: false                 // 🚨 required for HTTPS (Vercel)
    },
  })
);

app.use("/uploads", express.static("uploads"));

app.use(passport.initialize());
app.use(passport.session());

app.post("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.session.destroy(() => {
      res.clearCookie("connect.sid");
      res.status(200).json({ message: "Logged out successfully" });
    });
  });
});


//fetch all entries to be visible to the user....
app.get("/api/mydiary/:user_id", async (req, res) => {
  const { user_id } = req.params;
  try {
    const result = await db.query(
      "SELECT id, dt AT TIME ZONE 'UTC' AS dt, sub, cont, entry_no,liked FROM diary_entries WHERE user_id=$1 ORDER BY dt DESC, id DESC",
      [user_id]
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching data from mydiary:", error);
    res.status(500).send("An error occurred while fetching the data.");
  }
});

app.get("/mydiary", (req, res) => {
  console.log("Session cookie:", req.session);
  console.log("User in req.user:", req.user);
  console.log("Is Authenticated:", req.isAuthenticated());

  if (req.isAuthenticated()) {
    res.redirect(`${FRONTEND_URL}/home`);
  } else {
    res.redirect("/login");
  }
});

app.get("/api/get-liked", async (req, res) => {
  console.log("get-liked : ",req.isAuthenticated());
  if (req.isAuthenticated()) {
    const result = await db.query(
      "SELECT id, dt AT TIME ZONE 'UTC' AS dt, sub, cont, entry_no,liked FROM diary_entries WHERE liked=true ORDER BY dt DESC, id DESC"
    );
    res.json(result.rows);
  } else {
    res.redirect("/login");
  }
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get(
  "/auth/google/mydiary",
  passport.authenticate("google", {
    successRedirect: "/mydiary",
    failureRedirect: "/login",
  })
);

app.get("/api/user", (req, res) => {
  console.log("api/user:",req.isAuthenticated());
  if (req.isAuthenticated()) {
    res.json({
      user_id: req.user.id,
      username: req.user.diary_name,
      creation_date: req.user.created_at,
    });
    // console.log(req.user);
  } else {
    res.status(401).json({ error: "Not authenticated" });
  }
});

app.get("/api/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query(
      "SELECT id, dt AT TIME ZONE 'UTC' AS dt, sub, cont, entry_no FROM diary_entries WHERE id=$1",
      [id]
    );
    res.json(result);
  } catch (error) {
    console.error("Error fetching data from mydiary:", error);
    res.status(500).send("An error occurred while fetching the data.");
  }
});

app.get("/get-profile/:userid", async (req, res) => {
  const { userid } = req.params;
  console.log("get-profile : ",req.isAuthenticated());
  if (req.isAuthenticated()) {
    const result = await db.query(
      "Select id, profile_image From userdata Where id = $1 ",
      [userid]
    );
    res.json(result);
  } else {
    console.error("User not authenticated!!");
  }
});

app.post("/upload-image", upload.single("image"), (req, res) => {
  const imagePath = "/uploads/" + req.file.filename;

  db.query("UPDATE userdata SET profile_image = $1 WHERE id = $2", [
    imagePath,
    req.user.id,
  ])
    .then(() => {
      res.json({ message: "Image uploaded successfully", path: imagePath });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Database update failed" });
    });
});

app.post("/toggle-like", async (req, res) => {
  console.log("toggle-like:",req.body);
  const { id } = req.body;

  if (!id) return res.status(400).json({ error: "entryId is required" });

  try {
    const toggleQuery = `
      UPDATE diary_entries
      SET liked = NOT liked
      WHERE id = $1
      RETURNING liked;
    `;

    const result = await db.query(toggleQuery, [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Entry not found" });
    }

    res.status(200).json({
      success: true,
      liked: result.rows[0].liked,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
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
        [userId, diary_username, hashedPassword, display_name, email]
      );

      const newUser = result.rows[0];
      console.log(newUser);
      // console.log(req);

      // Automatically log in the user
      req.login(newUser, (err) => {
        if (err) {
          return next(err);
        }
        // res.render("info.ejs", { name: username });
        // res.redirect("http://localhost:5173");
        res.status(200).json({ message: "Registered", user: newUser });
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
      console.log("Login successful:", user.username);
      return res.status(200).json({
        message: "Logged in",
        user_id: user.id,
        diary_name: user.diary_name,
        creation_date: user.created_at,
      });
    });
  })(req, res, next);
});

app.post("/api/submit", async (req, res) => {
  const { user_id, entry_no, dt, sub, cont } = req.body;
  // console.log(req.body); // Debugging: See what the frontend is sending

  if (!user_id || !entry_no || !dt || !sub || !cont) {
    return res.status(400).send("All fields are required!");
  }

  try {
    const entryId = uuidv4();
    const utcDate = new Date(dt).toISOString();
    const entry_no_num = Number(entry_no); // Convert entry_no to a number
    const liked = false;
    // const date = new Date(utcDate);
    // const formattedDate = `${date.getUTCFullYear()}-${String(
    //   date.getUTCMonth() + 1
    // ).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`;
    // console.log(formattedDate);

    await db.query(
      "INSERT INTO diary_entries (id, user_id, dt, sub, cont, entry_no,liked) VALUES ($1, $2, $3, $4, $5,$6,$7)",
      [entryId, user_id, utcDate, sub, cont, entry_no_num, liked]
    );

    res
      .status(201)
      .json({ entryId, user_id, entry_no, dt: utcDate, sub, cont, liked });
  } catch (error) {
    console.error("Error saving diary entry:", error);
    res.status(500).send("An error occurred while saving the diary entry.");
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

app.delete("/api/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    // console.log(req.params);

    await db.query("DELETE FROM diary_entries WHERE id=$1", [id]);
    res.status(200).send("Deleted sucessfully!!");
  } catch (error) {
    console.error("Error deleting entry:", error);
    res.status(500).send("An error occurred while deleting the entry.");
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
        [username]
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
  })
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
          [email]
        );

        if (result.rows.length === 0) {
          const diaryUsername = profile.displayName
            .toLowerCase()
            .replace(/\s+/g, "_");

          const newUser = await db.query(
            "INSERT INTO userdata (username, password_hash, diary_name) VALUES ($1, $2, $3) RETURNING *",
            [email, "googleSignUp", profile.displayName]
          );

          console.log("New user created via Google:", newUser.rows[0]);
          return cb(null, newUser.rows[0]);
        } else {
          console.log("Existing Google user logged in:", result.rows[0]);
          return cb(null, result.rows[0]);
        }
      } catch (err) {
        console.error("Google Strategy Error:", err);
        return cb(err);
      }
    }
  )
);


passport.serializeUser((user, cb) => {
  cb(null, user.id); // just store user ID
});

passport.deserializeUser(async (id, cb) => {
  console.log("Trying to deserialize user ID:", id);
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

app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}...`);
});
