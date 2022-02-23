const express = require("express");
const mongoose = require("./model/db")
const bodyParser = require("body-parser");
const passport = require("passport");
const webscoket =require("./config/webscoket")
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });
const user = require("./router/user")
const movie = require("./router/movies")
const bananer = require("./router/bananer")
const forum  = require("./router/forum")
app.use("/api/user", user)
app.use("/api/movie", movie)
app.use("/api/home", bananer)
app.use("/api/forum",forum)
//  passport 初始化
app.use(passport.initialize());
require("./config/passport")(passport);
const port = 3001;
app.get("/text", (req, res) => {
    res.send("OK")
})

app.listen(port, () => {
    console.log(`successfu on port${port}`)
})
webscoket.listen()