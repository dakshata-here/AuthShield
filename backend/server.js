const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());
console.log("Loading auth routes...");
app.use("/api/auth", authRoutes);

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.get("/", (req, res) => {
    res.send("AuthShield Backend Running");
});
app.get("/routes", (req, res) => {
    res.send("Server is using the latest server.js");
});

const PORT = process.env.PORT || 5000;

// Connect to MongoDB before starting server
connectDB().then(() => {
    const authRoutes = require("./routes/authRoutes");

    app.use("/api/auth", authRoutes);
    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
    });
});