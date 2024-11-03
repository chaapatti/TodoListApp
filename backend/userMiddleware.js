const jwt = require("jsonwebtoken")


export default function SigninCheck(req, res, next) {
    const authHeader = req.headers("authorization");

    const token = localStorage.getItem("token");
    const verifyToken = jwt.verify(token, "MY_VEERY_SECRET_KEY")
    if (verifyToken) {
        const userId = verifyToken.userId; // Get the user id so that we can use this variable in someother place
        res.locals.userId = userId;
        next();
        
    }
    else {
        res.status(411);
        return res.json({
            message: "The user is invalid"
        })
    }
    
}