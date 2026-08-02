const express = require("express");
const router = express.Router();

console.log("Auth Routes Loaded");

router.get("/test", (req, res) => {
    res.send("Auth Route Working");
});

const { register, login } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);

module.exports = router;