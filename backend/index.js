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

const app = express();
const port = 3000;
const saltRounds = 10;
env.config();

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

db.connect();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

//fetch all entries to be visible to the user....
app.get("/api/mydiary/:user_id", async (req, res) => {
  const { user_id } = req.params;
  try {
    const result = await db.query(
      "SELECT id, dt AT TIME ZONE 'UTC' AS dt, sub, cont, entry_no FROM diary_entries WHERE user_id=$1 ORDER BY dt DESC, id DESC",
      [user_id]
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching data from mydiary:", error);
    res.status(500).send("An error occurred while fetching the data.");
  }
});

app.get("/mydiary", (req, res) => {
  // console.log(req.isAuthenticated());

  if (req.isAuthenticated()) {
    res.redirect("http://localhost:5173");
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
  // console.log(req.isAuthenticated());
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

// app.get("/About", (req, res) => {

// })

app.post("/register", async (req, res, next) => {
  const { username, diary_username, password } = req.body;
  if (!username || !password || !diary_username) {
    return res.status(400).send("All fields are required!");
  }

  const response = await db.query("SELECT * FROM userdata WHERE username=$1", [
    username,
  ]);
  if (response.rows.length > 0) {
    res.send("User Already existed!!");
  } else {
    const userId = uuidv4();
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    try {
      const result = await db.query(
        "INSERT INTO userdata (id, username, password_hash,diary_name) VALUES ($1, $2, $3,$4) RETURNING *",
        [userId, username, hashedPassword, diary_username]
      );

      const newUser = result.rows[0];
      console.log(newUser);
      console.log(req);

      // Automatically log in the user
      req.login(newUser, (err) => {
        if (err) {
          return next(err);
        }
        res.render("info.ejs", { name: username });
      });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).send("An error occurred while registering.");
    }
  }
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/mydiary",
    failureRedirect: "/login",
  })
);

// app.post(
//   "/register",
//   passport.authenticate("local", {
//     successRedirect: "/mydiary",
//     failureRedirect: "/login",
//   })
// );

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

    await db.query(
      "INSERT INTO diary_entries (id, user_id, dt, sub, cont, entry_no) VALUES ($1, $2, $3, $4, $5, $6)",
      [entryId, user_id, utcDate, sub, cont, entry_no_num]
    );

    res
      .status(201)
      .json({ id: entryId, user_id, entry_no, utcDate, sub, cont });
  } catch (error) {
    console.error("Error saving diary entry:", error);
    res.status(500).send("An error occurred while saving the diary entry.");
  }
});

app.delete("/api/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    console.log(req.params);

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
    if (username === "" || password === "") {
      console.log("Please fill the details!!!");
    } else {
      const result = await db.query(
        "SELECT * FROM userData WHERE username = $1",
        [username]
      );

      try {
        if (result.rows.length > 0) {
          const data = result.rows[0];
          const savedPassword = data.password_hash;

          bcrypt.compare(password, savedPassword, (err, result) => {
            if (err) {
              return cb(err);
            } else {
              if (result) {
                return cb(null, data);
              } else {
                return cb("User not found!!");
              }
            }
          });
        } else {
          return cb("User not registered!!");
        }
      } catch (err) {
        return cb(err);
      }
    }
  })
);

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/mydiary",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        // console.log(profile);
        const result = await db.query(
          "SELECT * FROM userdata WHERE username= $1",
          [profile.email]
        );
        if (result.rows.length === 0) {
          const newUser = await db.query(
            "INSERT INTO userdata (username,password_hash) VALUES ($1,$2) RETURNING *",
            [profile.email, "googleSignUp"]
          );
          console.log(newUser.rows[0]);
          cb(null, newUser.rows[0]);
        } else {
          cb(null, result.rows[0]);
        }
      } catch (err) {
        console.log("Google Strategy Error:", err);
        cb(err);
      }
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
