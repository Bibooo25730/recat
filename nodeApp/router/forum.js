const express = require('express');
const Router = express.Router();
const Smear = require("../model/Smear")
const Comment = require("../model/commit")
const  uuid = require('uuid');
Router.post('/submit', (req, res) => {
    let user = {
        name:req.body.name,
        title: req.body.title,
        value: req.body.value,
    }
    Smear.insertMany(user)
        .then((profile) => {
         res.send(profile)
    })
})
// 查询求片
Router.get('/check', (req, res) => {
    Smear.find()
        .then((profile => {
        res.send(profile)
    }))
})
// 自己求片
Router.post('/userCheck', (req, res) => {
    Smear.find({ name: req.body.name })
        .then((data) => {
        res.json(data)
    })
})
//评论
Router.post("/add", (req, res) => {
    let date = new Date()
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    let datas = Y + M + D + h + m + s;
    const replys = new Comment({
        name: req.body.name,
        data:datas,
        reply: [],
        content: req.body.content
    })

    Smear.findOneAndUpdate({ _id: req.body.id }, { $push: { 'reply':  replys, } },{new : true})
        .then(profile => {
           
            res.json(profile)
    })
.catch(err=>console.log(err))
       
})
// 子评论
Router.post("/reply", (req, res) => {

    const profileFields = {};
  
    profileFields.isShow = true;;
    
    Comment.findOneAndUpdate({ _id: req.body._id },{ $set:profileFields},{new : true})
    .then(profile => res.json(profile))

    
})
// 回复
Router.post('/comment', (req, res) => {
    if (req.body.name === req.body.tname) {
        let date = new Date()
        Y = date.getFullYear() + '-';
        M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        D = date.getDate() + ' ';
        h = date.getHours() + ':';
        m = date.getMinutes() + ':';
        s = date.getSeconds();
        let datas = Y + M + D + h + m + s;
        const replys = new Comment({
            name: req.body.name,
            data:datas,
            reply: [],
            content: req.body.content
        })
    
        Smear.findOneAndUpdate({ _id: req.body._id }, { $push: { 'reply':  replys, } },{new : true})
            .then(profile => {
                res.json(profile)
        })
    .catch(err=>console.log(err))
    } else {
        let date = new Date()
        Y = date.getFullYear() + '-';
        M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        D = date.getDate() + ' ';
        h = date.getHours() + ':';
        m = date.getMinutes() + ':';
        s = date.getSeconds();
        let datas = Y + M + D + h + m + s;
        let replys = {
            name: req.body.name,
            tname:req.body.tname,
            data: datas,                        
            content: req.body.content,
            reply: [],
            _id: uuid.v4(),
        }
       
            Smear.findOne({'_id':req.body._id})
                .then(profile => {
                  
                    let maps = profile;
                    maps.reply.map((item) => {
                            item.reply.push(replys)
                    })
               
                    Smear.findOneAndRemove({ '_id': req.body._id })
                        .then((profile) => {
                            if (profile.name) {
                                Smear.insertMany(maps)
                                .then((profile) => {
                                res.json(profile)
                       })
                         }
                    })
                })
                
.catch(err=>console.log(err))
    }

})
// 评论查询
Router.post('/comCheck', (req, res) => {
    console.log(req.body.id)
    Smear.findOne({_id:req.body.id})
    .then(profile => res.json(profile))
})
Router.get('/commtCheck', (req, res) => {
    Smear.find()
    .then(profile => res.json(profile))
})

module.exports = Router;

