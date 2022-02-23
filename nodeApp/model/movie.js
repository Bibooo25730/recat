const mongosse = require("./db");
const movie = new mongosse.Schema({
    title: {
        type: String,
    },
    fileType: {
        type: Array,
    },
})
module.exports = Movi = mongosse.model("movie", movie);