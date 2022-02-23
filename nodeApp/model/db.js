const mongoose = require("mongoose");
const db_ur = 'mongodb://127.0.0.1:27017/movie';
mongoose.connect(db_ur, { useNewUrlParser: true });
mongoose.connection.on("connected", () => {
    console.log("mongdb连接成功")
})
module.exports = mongoose;
