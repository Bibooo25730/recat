import React,{useState} from 'react'
import { useLocation,useNavigate} from "react-router-dom"
import { Card, Toast, Button } from 'antd-mobile'
import { MessageFill } from 'antd-mobile-icons'
import {ReactEmojiEditor } from 'react-emotor'
import Header from '../../../../components/common/header/index';
import { getComment } from "../../../../http/api"
import {connect} from "react-redux"
import "./style.scss"
const Reply = (props) => {
    let Location = useLocation();
    let data = Location.state;
  console.log(data)
  let Navigate = useNavigate();
    let [values, setValue] = useState('');
    function contentOnChange(content) {
        setValue(values = content)
    }
    function handlereply() {
      let user = {
            _id:props.id,
            id:data.datas._id,
            name: props.name,
            tname: data.datas.name,
            content:values
        }
        getComment(user).then((res) => {
           
           
          if (res.length === 1) {
            Toast.show('回复成功')
            setTimeout(() => {
                Navigate('/comment')
            },1000)
        }
              
            }
        )
       
       
    }
    return (
        <div className='replys'><Header title={'回复'}></Header>
           <Card
          title={
            <div style={{ fontWeight: 'normal' }}>
              <MessageFill style={{ marginRight: '4px', color: '#1677ff' }} />
              {data.datas.name+'：'}{data.datas.content}
            </div>
          }
          style={{ borderRadius: '16px' }}
        >
                <div className='content'>
                  <ReactEmojiEditor
                    placeholder="内容"
                  
      onChange={content => contentOnChange(content)}
                /></div>
          <div className='footer' onClick={e => e.stopPropagation()}>
            <Button
              color='primary'
              onClick={handlereply}
            >
              回复
                    </Button>
                   
          </div>
        </Card>
        </div>
      )
}
const stateMapName = (state) => {
  return {
    name: state.login.names,
    id:state.idInit.Mvdata._id
  }
}
export default connect(stateMapName)(Reply);