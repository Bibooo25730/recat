import React,{useState} from 'react';
import Header from "../../../components/Header/index"
import {useNavigate } from 'react-router-dom';
import { Swiper, List } from 'antd-mobile'
import "../../../assets/iconfont/iconfont.css"
import "./style.scss"
import { getMovie } from "../../../http/api"

const Home = () => {
    let [hongkongData, setHongKongData] = useState([])
    let [anmiData, setanmiData] = useState([])
    let [anEaData, setEaData] = useState([])
    let [tvShowData, setvShow] = useState([])
    React.useEffect(()=>{
        getMovie().then((res) => {
            setHongKongData(hongkongData = res[0])
            setEaData(anEaData = res[1])
            setvShow(tvShowData = res[2])
            setanmiData(anmiData = res[3])
           
        })
        //
        return function cleanup() { console.log("组件被卸载componentWillUnmount")};
    },[]);
    let Navigate = useNavigate()
    let bananer = JSON.parse(localStorage.getItem('bpan'))
    const items = bananer.bananer.map((item, index) => (
        <Swiper.Item key={index}>
            <img src={item.img} alt="" /> 
        </Swiper.Item>
      ))
    return <div className="home"><Header name={bananer.names}></Header>
        <Swiper loop autoplay>{items}</Swiper>
        <div className="fiyss">
            <div className="line">
               电影分类
            </div>
            </div>
            <div className="grid">
        <List >
                <List.Item onClick={() => {Navigate('/homekong',{state:{datas:hongkongData}}) }}>
                <svg className="icon" aria-hidden="true">
                   <use xlinkHref="#icon-xianggang"></use>
                </svg>
                港台电影
        </List.Item>
                <List.Item onClick={() => {Navigate('/anime',{state:{datas:anmiData}})}} >
                <svg className="icon" aria-hidden="true">
                   <use xlinkHref="#icon-dongman"></use>
                </svg>
               动漫
        </List.Item>
        <List.Item onClick={() => {Navigate('/eaocdent',{state:{datas:anEaData}})}}>
        <svg className="icon" aria-hidden="true">
                   <use xlinkHref="#icon-07-01-oumeidianshang"></use>
                </svg>欧美电影
                </List.Item>
                <List.Item onClick={() => {Navigate('/tvshow',{state:{datas:tvShowData}}) }}>
                <svg className="icon" aria-hidden="true">
                   <use xlinkHref="#icon-tv"></use>
                </svg>
               电视剧
        </List.Item>
            </List>
            </div>
    </div>;
}
export default Home