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

console.log("CLIENT_URL =>", process.env.CLIENT_URL);

const allowedOrigins = [process.env.CLIENT_URL, "http://localhost:5173"];

app.use(cors({
  origin: function(origin, callback) {
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

app.options("*", cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

connectMongoDB(process.env.MONGO_URL)
  .then(() => {
    console.log("Database Connected Successfully!");
  })
  .catch((err) => {
    console.log("Database Connection Error:", err);
  });

const io = initializeSocket(server);

app.use(express.static(path.join(__dirname, "./public")));

app.use("/user", require("./routes/userRouter.js"));
app.use("/room", require("./routes/roomRouter.js"));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
