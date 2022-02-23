const express = require("express");
const CryptoJS = require('crypto-js');
const jwt = require("jsonwebtoken");
const Router = express.Router();
const Register = require("../model/register");
const nodemailer = require('nodemailer');
const Codes = require('../model/code')

Router.post('/email', (req, res) => {
    let transporter = nodemailer.createTransport({
        // host: 'smtp.ethereal.email',
        service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
        port: 465, // SMTP 端口
        secureConnection: true, // 使用了 SSL
        auth: {
          user: '951225758@qq.com',
          // 这里密码不是qq密码，是你设置的smtp授权码
          pass: 'dyxkoqfdmubnbfag',
        }
    });
    const randomFns=()=> { // 生成6位随机数
        let code = ""
        for(let i= 0;i<6;i++){
            code +=parseInt(Math.random()*10)
        }
        Codes.insertMany({ email: req.body.email, codekye: code })
            .then(profiler => console.log(profiler))
            .catch(err => console.log(err))
        setTimeout(() => {
            Codes.deleteOne({ email:req.body.email })
            .then(profiler => console.log(profiler))
            .catch(err => console.log(err))
        },1000*60*5)
        return code 
    }
    let mailOptions = {
        from: '951225758@qq.com',
        to: req.body.email,
        subject: 'B盘',
        html: ` <p>你好！</p>
                <b>你的验证码是：${randomFns()}</b>
                <p>***该验证码5分钟内有效***</p>`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error)
        }
        res.send('Message sent: %s', info.messageId)
       
    })
})
// 注册
Router.post("/register", (req, res) => {
   
    //权限携带值如果为空就为游客 tourist
    Codes.findOne({ email: req.body.email })
        .then((user) => {
            if (user) {
                if (user.codekye !== req.body.code) {
                    res.status(400).json('验证码：错误')
                } else {
                    Register.findOne({ email: req.body.email })
                        .then((user) => {
                         // 查找邮箱如果有代表已注册
                        if (user) {
                            return res.status(400).json("邮箱已被注册");
                        } else {
                            const newUser = new Register({
                                name: req.body.name,
                                email: req.body.email,
                                password: req.body.password,
                                authority:req.body.authority
                            })
                            // 密码加密
                            var cryPass = CryptoJS.AES.encrypt(req.body.password,'secret key Bibooo').toString();
                            newUser.password = cryPass;
                            newUser.save()
                                .then(user => res.json(user))
                                .catch(err=>console.log(err))
                    }
                })
                }         
            }
    })
})
// 登录
Router.post("/login", (req, res) =>  {
    console.log(req.body )
    Register.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
            return res.status(400).json("邮箱不正确,請重新输入")
            } else {
                var bytes  = CryptoJS.AES.decrypt(user.password, 'secret key Bibooo');
                var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
                if (decryptedData.toString() === req.body.password) {
                    const rule = {id:user.id,name:user.name,authority:user.authority}
                    jwt.sign(rule, "secret", { expiresIn: 8888 }, (err, token)=>{
                        if (err) throw err;
                        res.json({
                            success: true,
                            token: "Bearer " + token,
                            name:user.name
                        })
                   } )
                } else {
                    return res.status(400).json("密码不正确")
                }
            }
            
    })
})
module.exports = Router;