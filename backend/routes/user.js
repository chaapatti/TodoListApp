const express = require('express');
const { User } = require('../db');

const router = express.Router();

router.get("/", (req, res)=> {
    res.send("Home page user");
})

router.post("/signup", async (req, res)=> {
    const body = req.body;
    const existingUser = await User.findOne({
        email: req.body.email
    })
    if (existingUser) {
        res.status(403);
        return res.json({
            message: "Invalid username or email."
        })
    }
    const user = await User.create({
        email:  body.email,
        password: body.password,
        firstName: body.firstName,
        lastName: body.lastName
    })
    
})

router.post("/signin", (req, res) => {
    res.send("welcome to signinpage.")
})

module.exports = router