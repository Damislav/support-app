const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const { connectDB } = require("./config/db");

const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(errorHandler);

// ROUTES
app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT, () => {
  console.log(`server has started on  port ${PORT}`);
});
