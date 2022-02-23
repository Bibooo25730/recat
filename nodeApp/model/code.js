const mongosse = require("./db");
const Code = new mongosse.Schema({
    codekye: {
        type: String,
       
    },
    email: {
        type:String
    }
})
module.exports = Codes = mongosse.model("code", Code);