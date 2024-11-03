const mongoose = require("mongoose")
const { string, object, array } = require("zod")
mongoose.connect("Database url")
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
    },
    firstName:{ 
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    List: [{
        type: String,
    }],
    todos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Todo"
    }]
})


const todoSchema = mongoose.Schema ({
    Title: {
        type: String,
        required: true,
        trim: true,
    },
    Description: {
        type: String,
        trim: true
    },
    DueDate: {
        type: Date,
        default: Date.now,
    },
    SubTask:[{
        Title: String,
    }]
})

const User = mongoose.model("User", userSchema);
const Todo = mongoose.model("Todo", todoSchema)

module.exports= {
    User, Todo
}