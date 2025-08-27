const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { upload } = require("../middlewares/multerConfig.js");
const { handleSignUp } = require("../controllers/signup.js");
const { handleLogin } = require("../controllers/login.js");
const { handleLogOutPage } = require("../controllers/logout.js");

// ✅ Middleware to check auth cookie
function checkForAuthenticationCookie(cookieName) {
  return (req, res, next) => {
    try {
      const token = req.cookies[cookieName];
      if (!token) {
        return res.status(401).json({ success: false, message: "No token found" });
      }

      // verify JWT token
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      req.user = payload;
      next();
    } catch (err) {
      console.error("Auth middleware error:", err.message);
      return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
  };
}

// ✅ GET /user/current-user
router.get("/current-user", checkForAuthenticationCookie("token"), (req, res) => {
  if (!req.user) {
    return res.status(401).json({ success: false, message: "User not authenticated" });
  }
  return res.json({ success: true, user: req.user });
});

// ✅ POST /signup
router.post("/signup", upload.single('profileImage'), async (req, res) => {
  try {
    await handleSignUp(req, res);
  } catch (err) {
    console.error("Signup error:", err.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// POST /login
router.post("/login", async (req, res) => {
  try {
    await handleLogin(req, res);
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// POST /logout
router.post("/logout", async (req, res) => {
  try {
    await handleLogOutPage(req, res);
  } catch (err) {
    console.error("Logout error:", err.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;
