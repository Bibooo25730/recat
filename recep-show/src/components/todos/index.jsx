import React,{ useState } from 'react'
import Header from '../common/header/index'
import { useNavigate } from 'react-router-dom'
import { connect } from "react-redux"
import { Card, Input, Button,Toast } from "antd-mobile"
import Footer from "../footer/index"
import 'emoji-mart/css/emoji-mart.css'
import {ReactEmojiEditor } from 'react-emotor'
import { getSubmit } from "../../http/api"
import Ws from "../../utils/webscoket"

import "./style.scss"
const Forum = (props) => {
    const scoket = new Ws();
    let [values, setValue] = useState('');
    let [title, setTitle] = useState('');
    const Navigation = useNavigate();
    function Forum() {
      Navigation('/forum')
    }
   
    function handleSumbit() {
       
        let data = {
            name:props.name,
            title: title,
            value:values
        }
        getSubmit(data)
            .then((res) => {
                if (res.length === 1) {
                    scoket.connect()
                    setTimeout(() => {
                        Toast.show({
                            icon: 'success',
                            content: '提交成功',
                        })
                        Navigation('/class/todo')
                       
                 },1000)
             }
        })
    }
    function handleTitle(e) {
        setTitle(title=e)
    }
    function contentOnChange(content) {
        setValue(values=content)
      }
    return (<div className='forum'><Header title={'求片区'}></Header>
        <div className='cards'>
        <Card headerClassName='card'  title='（新出的片不接受找）' />
        <Button onClick={Forum}  size='small' color='primary' fill='solid'>发贴</Button>
        </div>
    <div className="import">
        <Input placeholder='标题' clearable onChange={handleTitle}  />
        <div className='emoji'>
                <ReactEmojiEditor
                    placeholder="内容"
                    value= {values}
      onChange={content => contentOnChange(content)}
                />
              </div>
       <Button block color='primary' size='large' onClick={handleSumbit}>
          发表
            </Button>
            </div>
        <Footer></Footer>
    </div>)
}

const mapState = (state) => {
    return {
        name: state.login.names,
    }
    
}
export default connect(mapState)(Forum); 
