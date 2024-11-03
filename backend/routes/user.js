const express = require('express')

const router = express.Router();

router.get("/", (req, res)=> {
    res.send("Home page user");
})

router.post("/signup", (req, res)=> {
    
})

router.post("/signin", (req, res) => {
    res.send("welcome to signinpage.")
})

module.exports = router