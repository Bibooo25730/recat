import React,{useState} from 'react'
import { useNavigate } from "react-router-dom"

import { List, Button } from 'antd-mobile'

const ListView = (props) => {
  let Navigate = useNavigate();
  let data = props.datas;
  function handleReply(data) {
    Navigate('/reply',{state:{datas:data,name:props.name}})
  }
  return (
    <div> {<List header='评论列表' >
      {props.datas.map(item => (
      <List.Item
            key={item._id}
        prefix={item.name + '：' }
            description={item.data}
            extra={ <Button onClick={handleReply.bind(this,item)} size='small' color='primary'>
            回复
          </Button>}
        >
         {item.content}
      </List.Item>
    ))}
    </List>}
    
      <List>
        { data.map((item,index) => (
          item.reply === [] ? '' : item.reply.map(item => (
            <List.Item
              key={index+=1}
              prefix={item.name + '：' + item.tname}
              description={item.data}
              extra={<Button onClick={handleReply.bind(this, item)} size='small' color='primary'>
                回复
              </Button>}
            >
              {item.content}
            </List.Item>
          ))
        ))} 
     
      </List>
          
   
        
     
      </div>
  )
}
export default ListView;
