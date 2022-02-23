const mongosse = require("./db");
const Feedb = new mongosse.Schema({
    name: {
        type: String
    },
    value: {
        type:String
    },
    context: {
        type:String
    }
})
module.exports = Couple = mongosse.model("couple", Feedb);