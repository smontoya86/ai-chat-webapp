const express = require("express");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the AI Chat WebApp API" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
