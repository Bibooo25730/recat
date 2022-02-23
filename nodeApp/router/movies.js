const express = require("express");
const Router = express.Router();
const passport = require("passport");
const movies = require("../model/movie")
const  uuid = require('uuid');
// 添加资源
Router.post('/addMovie', passport.authenticate("jwt", { session: false }), (req, res) => {
    // 判断电影分类
    movies.findOne({ title: req.body.title })
        .then((movie) => {
            if (movie) {
                let fileTypes = [
                    {
                        filid:uuid.v1(),
                        filmtitle: req.body.filmtitle,
                        fileImg: req.body.fileImg,
                        filebrief: req.body.filebrief,
                        network: req.body.network,
                        password: req.body.password
                    }]
                movies.updateOne({ _id: movie._id }, { $addToSet: { fileType: fileTypes } })
                    .then((profile) => {
                        if (profile.acknowledged) {
                            return res.status(200).json('成功')
                        }
                    })
                    .catch(err => console.log(err))
            } else {
                
                let fileTypes = [
                    {
                        filid:uuid.v1(),
                        filmtitle: req.body.filmtitle,
                        fileImg: req.body.fileImg,
                        filebrief: req.body.filebrief,
                        network: req.body.network,
                        password: req.body.password
                    }]
                console.log(fileTypes,'a')
                let newMovie = new movies({
                    title: req.body.title,
                    fileType: fileTypes
                })
                newMovie.save()
                    .then(profile => res.json(profile))
                    .catch(err => console.log(err))
            }
        })
}
)
// 删除资源
Router.post('/RemoveMovie', passport.authenticate("jwt", { session: false }), (req, res) => {
    movies.updateOne({ title: req.body.title }, { "$pull": { "fileType": { "filmtitle": req.body.filmtitle } } })
        .then((profile => res.send(profile)))

})
// 查看资源
Router.get('/CheckMovie', (req, res) => {
    movies.find()
        .then(profile => res.json(profile))
})
// 根据id查找影片
Router.post('/checkId', (req, res) => {
    console.log(req.body)
    movies.findOne({ title: req.body.title })
        .then((move) => {
            if (move) {
                move.fileType.map((item) => {
                    if (req.body.filid === item.filid) {
                        res.send(item)
                    } else {
                        return;
                    }
                })
            
            }
            
        })
    .catch(profile=>console.log(profile))
})
// 搜索影片
Router.post('/searchMv', async (req, res) => {
    if (!req.body.title) {
        return;
    } 
 
    // let Movies = await movies.find({ 'fileType': { '$filmtitle': { '$in': { $regex: `${req.body.title}` }} } })
    // let Movies = movies.find({ $or:[ { title: `${req.body.title}` }] })
    let Movies = await movies.aggregate(
        [
            {   
                $unwind: "$fileType" 
            },
            {
                $match: {
                    "fileType.filmtitle":{$regex:`${req.body.title}`,$options: "x" }, 
                }
            }
        ]
    )
    if (Movies === []) {
        res.status(400)
    } else {
        let datas;
      datas =  Movies.filter((item, index) => {
            return index < 3
       })
        res.send(datas)
    }
})
module.exports = Router;