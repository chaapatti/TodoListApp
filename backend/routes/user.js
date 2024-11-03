const express = require('express');
const { User } = require('../db');
const jwt = require("jsonwebtoken")
const z = require("zod")
const router = express.Router();

router.get("/", (req, res)=> {
    res.send("Home page user");
})

const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    firstName: z.string(),
    lastName: z.string(),

})

router.post("/signup", async (req, res)=> {
    const body = req.body;
    const { success } = z.safeParse(signupInput);
    if (!success) {
        res.status(403);
        return res.json({
            message:"Invalid user credential. Please check the information."
        })
    }
    // Need some zod validation and password hashing.
    const existingUser = await User.findOne({
        email: body.email
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

    if(user) {
        const token = jwt.sign({userId: user._id}, "MY_VEERY_SECRET_KEY")
        localStorage.setItem("token", token);
        return res.json({
            jwt: token
        })
    }
    else{
        res.status(411);
        res.json({
            message: "Unauthorized access"
        })
    }
    
})

const signinInput = z.object({
    email: z.string().email(),
    password: z.string()
})


router.post("/signin", async (req, res) => {
    const body = req.body;
    // Need zod validation here also
    const { success } = z.safeParse(signinInput);
    if (!success) {
        res.status(403);
        return res.json({
            message:"Invalid user credential. Please check the information."
        })
    }
    const user = await User.findOne({
        email: body.email,
        password: body.password
    })
    if (user) {
        const token = jwt.sign({userId: user._id}, "MY_VEERY_SECRET_KEY")
        localStorage.setItem("token", token)
        return res.json({
            jwt: token
        })
    }
    else{
        res.status(411);
        return res.json({
            message: "Incorrect email or password."
        })
    }
})

module.exports = router