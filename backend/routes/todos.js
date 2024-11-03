const express = require("express");
import SigninCheck from "../userMiddleware";
const { Todo, User } = require("../db")
const router = express.Router();
// SO the todos are for the user so before reaching here we need to check if the user is signed in already.
router.get("/alltodos",SigninCheck, (req, res) => {
    const userId = res.locals.userId;
    const user = User.findOne({
        _id: userId
    })
    if (user){

       return res.json({
        Todos: user.todos
       })
    }
    
})

router.post("/task", SigninCheck, (req, res) => {

})

router.post("/:id/subtask", SigninCheck, (req, res) => {
    // based on the id we create a subtask for todo task.
})

router.post("/list",SigninCheck, (req, res) => {
    // created new list for the user.
})

router.put("/task/:id", (req, res) => {
    // update a todo task information.
})


module.exports = router