import React from 'react'
import { Image, List, Empty } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { QuestionCircleOutline } from 'antd-mobile-icons'
import {getIdMovie} from "../../../../http/api"
import "./style.scss"
export default (props) => {
  const Navigate = useNavigate();
  function HandleClick(e) {
    let idMovie = {
      title: props.titles,
      filid:e
    }
    getIdMovie(idMovie)
      .then((res) => {
        if (res.filmtitle) {
          Navigate('/movie',{state:{data:res,title:props.titles}})
        }
      
    })
  }
    let fileType = props.data;
    if (fileType === undefined) {
        fileType = []
  }
    return (
        <div className='listView'>
            {fileType.length > 0? <List >
        {fileType.map(user => (
          <List.Item
          clickable
            key={user.filmtitle}
            onClick={HandleClick.bind(this,user.filid)}
            prefix={
              <Image
                src={user.fileImg}
                style={{ borderRadius: 20 }}
                fit='cover'
                width={40}
                height={40}
              />
            }
             description={user.filebrief}
          >
            {user.filmtitle}
          </List.Item>
        ))}
            </List>: <Empty
          style={{ padding: '64px 0' }}
          image={
            <QuestionCircleOutline
              style={{
                color: 'var(--adm-color-light)',
                fontSize: 48,
              }}
            />
          }
          description='暂无数据'
        />}
        </div>
    )
  }
  
 