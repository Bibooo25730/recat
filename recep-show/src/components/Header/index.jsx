import React,{ useState }  from 'react';
import { Image, Popup, TextArea, Button,SearchBar,List,Empty,Toast} from 'antd-mobile'
import { useNavigate } from "react-router-dom"
import {connect} from "react-redux"
import {getFeead,getSearch,getIdMovie} from "../../http/api"
import { UnorderedListOutline, SearchOutline } from "antd-mobile-icons"
import "./style.scss"


const Header = (props) => {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  let  [MovieData, setMovie] = useState([])
  let [values, serValue] = useState('')
  const Navigate = useNavigate()
  function handleShow() {
    setVisible2(!visible2)
  };
  function handleSumbit() {
    let user = {
      name: props.name,
      value:values
    }
    getFeead(user).then((res) => {
      if (res.length) {
        Toast.show({
          content: '提交成功',
        })
        setVisible2(false)
  
       }
    })
  }
  function handleTextArea(e) {
    serValue(values = e)
  }
  function searchText(e) {
    // 搜索去除空格
   let  titles = e.replace(/\s+/g,"");
    let data = {
      title:titles
    }
    if (!data.title) {
      return; 
    } else {
      getSearch(data)
        .then((res) => {
        setMovie(MovieData = res)
    })
    } 
  }
  function HandleClick(movie) {
    let idMovie = {
      title: movie.title,
      filid:movie.fileType.filid
    }
    getIdMovie(idMovie)
      .then((res) => {
        if (res.filmtitle) {
          Navigate('/movie',{state:{data:res,title:movie.title}})
        }
    })
  }
  function handleQuirt() {
    Navigate('/')
  }
  function handleNav() {
    Navigate('/class/home')
  }
  return <div className="header">
    <Popup
              bodyClassName="prop"
              visible={visible1}
              onMaskClick={() => {
                setVisible1(false)
              }}
              position='left'
              bodyStyle={{ minWidth: '60vw' }}
    >
      <div className="prop-Container">
             <Image
src={[require("../../assets/img/channels4_profile.jpg")]}
width={80}
height={84}
fit='cover' 
style={{ borderRadius: 40}}
        />
        <ul className="uls">
        <li> <svg className="icon" aria-hidden="true">
                   <use xlinkHref="#icon-yonghu"></use>
          </svg> <span className="fontsize">{props.name}</span></li>
          <li onClick={handleNav}> <svg className="icon" aria-hidden="true">
                   <use xlinkHref="#icon-shouye"></use>
          </svg> <span className="fontsize">首页</span></li>
          <li> <svg className="icon" aria-hidden="true">
                   <use xlinkHref="#icon-gongneng"></use>
                </svg> <span className="fontsize1">更多功能待开发中</span></li>
          <li onClick={handleShow}><svg className="icon" aria-hidden="true">
                   <use xlinkHref="#icon-wentifankui1"></use>
          </svg><span className="fontsize2"> 反馈</span>
          </li>
          {visible2 ? <div className='prop'>
            <div className='text'>
            <span className="name">姓名： {props.name}</span>  <Button onClick={handleSumbit} color='success' size='mini'>提交</Button></div>
            <TextArea onChange={handleTextArea} autoSize placeholder={'反馈建议：'}  showCount  maxLength={35}></TextArea> 
            </div>:''}
          <li><svg className="icon" aria-hidden="true">
                   <use xlinkHref="#icon-tuichu1"></use>
                </svg><span className="fontsize3" onClick={handleQuirt}> 退出</span></li>
        </ul>
        </div>
            </Popup>
  <UnorderedListOutline  onClick={() => {
                setVisible1(true)
              }} color = ' #000000 ' fontSize = { 30 } />
<Image
src={[require("../../assets/img/icon.png")]}
width={140}
height={64}
fit='cover' 
style={{ borderRadius: 4 }}
    />
    <Popup
     visible={visible3}
     onMaskClick={() => {
       setVisible3(false)
     }}
     position='top'
     bodyStyle={{ minHeight: '22vh' }}>

      <div>  <SearchBar
          onChange={searchText}
          placeholder='请输入片名'
          style={{ '--background': '#ffffff' }}
      />
        <List header='（模糊搜索）'>
          {MovieData === undefined ?   <Empty description='暂无数据' />:MovieData.length === 0 ?    <Empty description='暂无数据' />:MovieData.map(movie => (
            <List.Item
              clickable
              onClick={HandleClick.bind(this,movie)}
         key={movie.fileType.filid}
         description={movie.fileType.filebrief}
           >
        {movie.fileType.filmtitle}
</List.Item>
          ))}
      </List>
      </div>
    </Popup>
    <SearchOutline onClick={() => {
      setVisible3(true)
    }} color = ' #000000 ' fontSize = { 30 }/>
</div>;
}
const mapStateName = (state) => {
  return {
    name:state.login.names
  }
}
export default connect(mapStateName)(Header)