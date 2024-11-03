const express = require("express");
const mainRouter = require("./routes/index")
const app = express();

app.use("/api/v1", mainRouter)
app.use(express.json());


app.listen(3001);