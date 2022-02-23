import React,{useState,useEffect } from 'react'
import { useLocation } from "react-router-dom"
import { AutoCenter, Input, Button,Toast} from 'antd-mobile'
import {getAdd,getComCheck} from "../../../http/api"
import Header from '../../../components/Header';
import {connect} from "react-redux"
import List from './List/index';
import "./style.scss"
const Comment = (props) => {
    let Location = useLocation();
    let state = Location.state;
    let bpans = JSON.parse(localStorage.getItem('bpan'));
    let bpanl = JSON.parse(localStorage.getItem('bpans'));
    let [value, setValue] = useState('');
    let [data, setDate] = useState([]);
    useEffect(() => {
        let user = {
            id: props.data._id
        }
        getComCheck(user)
            .then(res => {
               setDate(data = res.reply)
        })
    },[])
    function handleCommit() {
        let data = {
            id:state.datas._id,
            name: props.name,
            content:value
        }
        
        getAdd(data)
            .then((res) => {
                if (res.name) {
                    setValue(value = '')
                    setDate(data = res.reply)
                    Toast.show('回复成功，刷新一下')
                }
          
        })
    }
    function lengthHanle() {
        let length = 0;
        data.map(item => {
         length += item.reply.length
        })
        let lengths = length + data.length;
        if (lengths < 0) {
            return 0
        } else {
            return lengths
        }
    }
    return (
        <div className='comment'><Header name={bpans.names}></Header>
            <AutoCenter><h3>{bpanl.name}：{bpanl.title}</h3>{bpanl.value}</AutoCenter>
            <div className='right'>共有{  lengthHanle()}条回复</div>
            <div className='reply'>
             <List datas={data} name={bpans.names}></List>
            </div>
            <div className="com">
                <Input
             placeholder='我也说一句'
                    value={value}
             onChange={val => {
            setValue(val)
                    }}
                />
                <div className='left'>
                <Button size='small' color='primary' onClick={handleCommit}>
            回复
          </Button>
                 </div>
            </div>
           
</div>
     
      )
}
const mapState = (state) => {
    return {
        name: state.login.names,
        data:state.idInit.Mvdata
    }
    
}
export default connect(mapState)(Comment);