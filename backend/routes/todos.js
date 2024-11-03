const express = require("express");

const router = express.Router();
// SO the todos are for the user so before reaching here we need to check if the user is signed in already.
router.get("/alltodos", (req, res) => {
    res.send("here are all the todos.")
    
})
module.exports = router