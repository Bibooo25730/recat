const mongosse = require("./db");
const bananer = new mongosse.Schema({
    img: {
        type: String,
    },
})
module.exports = swiper = mongosse.model("bananer", bananer);