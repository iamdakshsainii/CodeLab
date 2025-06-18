const express = require("express");
const http = require("http");
const path = require("path");
require("dotenv").config();
const { connectMongoDB } = require("./connection.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const { initializeSocket } = require("./services/initializeSocket.js");

// ✅ Log to confirm .env is loaded correctly
console.log("CLIENT_URL =>", process.env.CLIENT_URL);

// ✅ CORS Configuration (Fixed)
const allowedOrigins = [process.env.CLIENT_URL, "http://localhost:5174"];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// ✅ Preflight requests handling
app.options("*", cors({
  origin: allowedOrigins,
  credentials: true
}));

// ✅ Enable JSON & URL parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ✅ Enable cookie parsing
app.use(cookieParser());

// ✅ Connect MongoDB
connectMongoDB(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ Database Connected Successfully!");
  })
  .catch((err) => {
    console.log("❌ Database Connection Error:", err);
  });

// ✅ Initialize Socket.io
const io = initializeSocket(server);

// ✅ Serve static files
app.use(express.static(path.join(__dirname, "./public")));

// ✅ Optional: Middleware to check auth cookies (if needed globally)
// const { checkForAuthenticationCookie } = require("./middlewares/authentication.js");
// app.use(checkForAuthenticationCookie("token"));

// ✅ Routes
app.use("/user", require("./routes/userRouter.js"));
app.use("/room", require("./routes/roomRouter.js"));

// ✅ Start server
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
