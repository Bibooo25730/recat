import React from 'react'
import { TabBar } from 'antd-mobile'
import "./style.scss"
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import {  Route, Routes,useNavigate } from "react-router-dom"
import Home from "./Home/index"
import Message from "./message/index"
import Tode from "../todo/index"

const Bottom = () => {
   const Navigate = useNavigate()
    const setRouteActive = (value) => {
        Navigate(value)
      }
    
  const tabs = [
    {
      key: '/class/home',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/class/todo',
      title: '求片区',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/class/message',
      title: '我的消息',
      icon: <MessageOutline />,
    },
    // {
    //   key: '/me',
    //   title: '个人中心',
    //   icon: <UserOutline />,
    // },
  ]
  
  return (
    <TabBar  onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}

export default () => {
  return (
   
      <div className="Tabber">
            {/* <Home></Home> */}
          <Routes>
               <Route exact path="/message" element={ <Message></Message>}></Route>
               <Route exact path='/home' element={<Home></Home>}></Route>
               <Route exact path='/todo' element={<Tode></Tode>}></Route>  
          </Routes>
          <Bottom />
        </div>

  )
}

