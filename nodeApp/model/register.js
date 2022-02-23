const mongoose = require("./db");
const register = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    authority: {
        type: String,
      
    },
   
})
module.exports = Regi = mongoose.model("users", register);