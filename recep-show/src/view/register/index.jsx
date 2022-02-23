import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Toast } from 'antd-mobile'
import { getCode,getRegister } from "../../http/api"
import "./style.scss"
export default class Register extends Component {
  constructor() {
    super()
    this.checkRef = React.createRef();
    this.passRef = React.createRef();
    this.state = {
      name: "",
      email: "",
      password: "",
      password1:"",
      code: "",
      checkbox: false,
      PhoPc:'register-mobile'
    }
  }
  componentDidMount() {
    
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      this.setState({
        PhoPc:'register-mobile'
      })
	   //手机
	} else {
	  this.setState({
      PhoPc:'register-pc'
    })     //电脑
	}
  }
  sendHanderCode = (e) => {
    if (!this.state.email) {
      return
    }
    //  改称60秒倒计时以防连续点击
    let time = 60
    let id = setInterval(() => {
      e.target.disabled = true
      e.target.innerText = time--
      if (time < 1) {
        clearInterval(id)
        e.target.innerText = '发送'
        e.target.disabled = false
      }
    }, 1000)
  
    let email = {
      email:this.state.email
    }
    //  点击请求后端发送验证码
    getCode(email).then((res) => {
       console.log(res)
    })
  }
  HnadleChange = (e) => {
    this.setState({
      checkbox:e.target.checked
     })
  }
  handleGetInputName = (e) => {
    this.setState({
      name:e.target.value
    })
  }
  handleGetInputEmail = (e) => {
    this.setState({
      email:e.target.value
    })
  }
  handleGetInputCode = (e) => {
    this.setState({
      code:e.target.value
    })
  }
  handleGetInputPass1 = (e) => {
    this.setState({
      password:e.target.value
    })
  }
  handleGetInputPass2 = (e) => {
    this.setState({
      password1:e.target.value
    })
  }
  HandleRegister = (e) => {
  
    let { name, email, password, password1, code, checkbox } = this.state;
   
    if (!checkbox) {
      this.checkRef.current.style.color='red'
      return;
    };
    if (name === '' || email === '' || password === '' || password1 === '' || code === '') {
     return;
    }
    if (password !== password1) {
     this.passRef.current.style.color='red'
      return;
    }
    let user = {
      name: name,
      email: email,
      password: password,
      code: code,
      authority:'tourist'
    }

    getRegister(user).then((res) => {
      if (res) {
        Toast.show({
          content: '注册成功请耐心等待,> 登录页',
          maskClickable: false,
        })
        setTimeout(() => {
          window.history.back()
        },2000)
       
        }
    })
    
  }
  render() {
      return <div className={this.state.PhoPc}>
          <img src={[require("../../assets/img/icon.png")]} alt="Bibooo" />
          <div className="register-cart">
              <h4>注册</h4>
           <div className="register">
            <div className="cartInp">
              <div className="name"> <label htmlFor="name">昵称</label>
              <input onChange={this.handleGetInputName} type="text"  name="name" /></div>
              <div className="email"> <label htmlFor="email">邮箱</label>
              <input type="email" onChange={this.handleGetInputEmail} name="email"></input></div> 
             <div className="code">
              <label htmlFor="code">邮箱验证码</label>
                <input type="text" onChange={this.handleGetInputCode} name="code" />
                <button onClick={this.sendHanderCode}>发送</button>
              </div>  
              <div className="pass"> <label htmlFor="password">密码</label>
              <input type="password" onChange={this.handleGetInputPass1} name="password"></input>
              <label ref={this.passRef} htmlFor="password">确认密码</label>
              <input type="password"onChange={this.handleGetInputPass2} name="password"></input></div>
            </div>
            <div className="serve">
               <input  type="checkbox"  onChange={this.HnadleChange} />注册即代表同意 <Link to="/clause" ref={this.checkRef}>服务条款</Link>
            </div>
          
          </div>
          <button className="submit"  onClick={this.HandleRegister}>注册</button>
          </div>
    </div>;
  }
}
