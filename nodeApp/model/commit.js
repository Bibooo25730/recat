const mongoose = require("./db");
const Comment = new mongoose.Schema({
    name: {
        type:String
    },
    content: {
        type:String,
    },
    data: {
        type: Object,
        default:Math.floor(Date.now())
    },
    // 是否有子评论
    isShow: {
        type: Boolean,
        default:false
    },
    // 子评论
    reply: {
        type:Array
    }
})
module.exports = Com = mongoose.model("comment", Comment);