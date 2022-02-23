import React,{useEffect,useState} from 'react';
import Header from '../../../components/Header/index';
import { Divider, Tag,Empty} from 'antd-mobile'
import { getCheckIdea,getUserCheck} from "../../../http/api"
import MessageView from '../../../components/common/MessageView/index';
import { connect } from "react-redux"
import NeedMv from "../../../components/common/header/NeepMv/index"
import "./style.scss"
const Message = (props) => {
  let [data, setData] = useState([]);
  let [datas, setDatas] = useState([]);
  useEffect(() => {
    let user = {
       name:props.name
     }
    getCheckIdea(user).then((res) => {
      setData(data = res)
    })
    getUserCheck(user).then((res) => {
      setDatas(datas = res)
    })

  },[])
  return <div className='Message'><Header name={props.name}></Header>
    <div className='divider'>
      <Divider>反馈记录</Divider>
      <Tag
            color='success'
            fill='outline'
            style={{ '--background-color': '#c8f7c5' }}
          >
            {props.name}
      </Tag>
    </div>
    {data.length < 1? <Empty description='暂无数据' />: <MessageView datas={data}></MessageView>}
    <div className='divider'>
      <Divider>求片记录</Divider>
      <Tag
            color='success'
            fill='outline'
            style={{ '--background-color': '#c8f7c5' }}
          >
            {props.name}
      </Tag>
    </div>
    {datas.length < 1? <Empty description='暂无数据' />: <NeedMv datas={datas}></NeedMv>}
  </div>;
}
const mapStateName = state => {
  return {
      name:state.login.names
    }
}
export default connect(mapStateName)(Message) 
