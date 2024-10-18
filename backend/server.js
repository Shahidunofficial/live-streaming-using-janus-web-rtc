const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

// DOTENV
dotenv.config();

// MONGODB CONNECTION
connectDB();

// REST OBJECT
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
app.use("/api/v1/auth", require("./routes/userRoutes")); // Assuming userRoutes is for authentication
app.use("/api/v1/post", require("./routes/postRoutes")); // Assuming postRoutes for handling posts
app.use("/api/v1/teacher", require("./routes/teacherRoutes")); // For teacher-related routes
app.use("/api/v1/student", require("./routes/studentRoutes")); // Fixed the typo in this route
app.use("/api/v1/class", require("./routes/classRoutes")); // Added the class routes

// PORT
const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`.bgGreen.white);
});
