import React,{useEffect,useState} from 'react'
import Header from '../../components/common/header/index'
import { Card, Button,List,PullToRefresh,Empty} from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { MessageOutline } from 'antd-mobile-icons'
import { connect } from "react-redux"
import {idInit} from "../../actions/idinit.js"
import { getCheck } from "../../http/api"
import { sleep } from 'antd-mobile/es/utils/sleep'
import "./style.scss"

const Smear = (props) => {
  const Navigation = useNavigate();
  let [data, setData] = useState([]);
  let [bpan, setbpan] = useState('');
  let [endindexs, setIndexs] = useState(6);
  let [initindexs, setIndex] = useState(0);
  function Forum() {
    Navigation('/forum')
  }
  function getLocalTime(data,type){
    var _data = data;
    //如果是13位正常，如果是10位则需要转化为毫秒
    if (String(data).length == 13) {
      _data = data
    } else {
      _data = data*1000
    }
    const time = new Date(_data);    
    const Y = time.getFullYear();
    const Mon = time.getMonth() + 1;
    const Day = time.getDate();
    const H = time.getHours();
    const Min = time.getMinutes();
    const S = time.getSeconds();
    //自定义选择想要返回的类型
    if(type=="Y"){
      return `${Y}-${Mon}-${Day}`
    }else if(type=="H"){
      return `${H}:${Min}:${S}`
    }else{
      return `${Y}-${Mon}-${Day} ${H}:${Min}:${S}`
    }
  }
  useEffect(() => {
    getCheck().then((res) => {
    
      let datas = res.slice(initindexs, endindexs);
        setData(data = datas)
  })
  }, [endindexs])
  async function Onrefresh() {
    
      setIndex((initindexs === 0 ? 6 : initindexs * 2) )
      setIndexs(endindexs * 2)
   await sleep(1000)
    
  }
  function handleClick(e) {
    props.idInit({
       Mvdata:e
     })
    localStorage.setItem('bpans', JSON.stringify(e));
    Navigation('/comment',{state:{datas:e,name:bpan.names}})
  }
    return (<div className='to-Container'><Header title={'求片区'}></Header>
          <Button onClick={Forum}  size='small' color='primary' fill='solid'>发贴</Button>
        
        <Card title='电影名字'  headerStyle={{
            color: '#1677ff',
          }}
          bodyClassName={['card']}>
          电影发行时间：xxx 演员：xxx 发行国家：xxx
      </Card>
      <PullToRefresh
        onRefresh={Onrefresh}>
        {data.length === 0 ?   <Empty description='暂无数据' />: <List header='求片列表'>
      {data.map(user => (
        <List.Item
          key={user._id}
          onClick={handleClick.bind(this,user)}
          description={ getLocalTime(user.data)}
          extra={
            <div className='flex'>
                
           <MessageOutline  fontSize={24}/>
            </div>
          }
        >
          
          <h3>{user.title}</h3>
        </List.Item>
      ))}
    </List>}
       
    </PullToRefresh>
    </div>)
}
export default connect(null,{idInit})(Smear) ;
