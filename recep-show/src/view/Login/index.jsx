import React, { Component } from 'react';
import { Link } from "react-router-dom"
import {  Toast } from 'antd-mobile'
import {getLogin,getBananer} from "../../http/api"
import Footer from "../../components/footer/index"
import "./style.scss"


export default class index extends Component {
  constructor() {
    super()
    this.Buttref = React.createRef()
    this.Wecref = React.createRef()
    this.state = {
      PhoPc: 'mobile',
      email: "",
      password: "",
      name: "",
      bananer:[]
    }
  }
  componentDidMount() {
    
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      this.setState({
        PhoPc:'mobile'
      })
	   //手机
	} else {
	  this.setState({
      PhoPc:'pc'
    })     //电脑
	}
  }
  handleLogin = () => {
    if (this.state.email==='' && this.state.password==='') {
      return;
    }
    let user = {
      email: this.state.email,
      password:this.state.password
    }
  
   
    getLogin(user).then((res) => {
      if (res.status === 400) {
        let err = res.data;
      return  Toast.show({
          icon: 'fail',
          content: err,
        })
      }
     
      if (res.success) {
        this.setState({
          name:res.name
        })
        this.Buttref.current.style.display="none"
        this.Wecref.current.style.display = "block"
        getBananer().then((res) => {
          this.setState({
            bananer:res
          })
        })
        setTimeout(() => {
          
          let datas = {
            bananer: this.state.bananer,
          }
          this.props.onLogin(this.state.name);
          localStorage.setItem('bpan',JSON.stringify(datas))
          this.props.Navigates('/class/home')
        },3000)
      }
     
    })
    
  }
  handleEmail = (e) => {
    this.setState({
      email:e.target.value
    })
  }
  handlePass = (e) => {
    this.setState({
      password:e.target.value
    })
  }
  passwordFor = () => {
    return  Toast.show({
      icon: 'fail',
      content: 'call邮箱951225758@qq.com处理',
    })
  }
  render() {
    return <div className={this.state.PhoPc}>
          <div className="cart">
          <img src={[require("../../assets/img/icon.png")]} alt="Bibooo" />
              <h3>欢迎使用 B盘</h3>
              <p>登录系统获取资源,视频学习教程,影视逐步更新中</p>
              <div className="login">
                  <label htmlFor="email">邮箱</label>
                  <input type="email" onChange={this.handleEmail} name="email"></input>
                   <Link className="forget" onClick={this.passwordFor}  to="/">找回密码</Link>
                  <label htmlFor="password">密码</label>
                  <input type="password" onChange={this.handlePass} name="password"></input>
          <div className="submit">
            <div className="wecome" ref={this.Wecref}>欢迎你回来 {this.state.name}</div>
                      <button ref={this.Buttref} onClick={this.handleLogin}>登录</button>
                  </div>
                  <div className="nouser">
                    还没有账号？
                  <Link className="user" to="/register">马上注册</Link>
                  </div>
              </div>
              <Footer></Footer>
        </div>
    </div>;
  }
}
