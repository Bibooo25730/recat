const express = require('express');
const Router = express.Router();
const bananer = require("../model/swiper")
const Feedb = require("../model/feedback")
// 添加图片
// Router.post("/bananer", (req, res) => {
   
//     let list = req.body.img;
//     bananer.insertMany(list).then((bana) => {
//          console.log(bana)
//     })
//     res.send('OK')
// })
// bananer图
Router.get("/bananer", (req, res) => [
    bananer.find()
        .then((img) => {
        res.send(img)
    })
])
// 提交反馈意见
Router.post("/back", (req, res) => {
    let feedbs = {
        name: req.body.name,
        value:req.body.value
    }
    console.log(feedbs)
    Feedb.insertMany(feedbs)
        .then((data) => {
        res.send(data)
    } )
})
// 返回意见查询
Router.post('/check', (req, res) => {
    Feedb.find({name:req.body.name})
        .then((feed) => {
        res.send(feed)
        })
    .catch((profiler)=>console.log(profiler))
})

// 回复反馈意见
Router.post('/Comment', (req, res) => {
    console.log(req.body.id)
    const profileFields = {};
  
    profileFields.context = req.body.context;;
    
    Feedb.findOneAndUpdate({ _id: req.body.id },{ $set:profileFields},{new : true})
    .then(profile => res.json(profile))

})
Router.post('/checkSee', (req, res) => {
    Feedb.find()
        .then((feed) => {
          let Feeds = feed.filter((item,index) => {
                return index < req.body.connt
          })
            res.send(Feeds);
        })
    .catch((profiler)=>console.log(profiler))
})
Router.get('/checkdata', (req, res) => {
    Feedb.find()
        .then((feed) => {
         
            res.send(feed);
        })
    .catch((profiler)=>console.log(profiler))
})
module.exports = Router;