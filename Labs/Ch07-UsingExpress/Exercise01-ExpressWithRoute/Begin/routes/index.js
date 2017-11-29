'use strict'

const express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello from the main page!");
});

router.get("/about", (req, res) => {
    res.send("Hello from the about page!");
});

router.get("/class", (req, res) => {
    res.send("Hello from the class tools page!");
});

module.exports = router;