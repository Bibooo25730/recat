import React from 'react';
import {useLocation } from 'react-router-dom'
import Header from "../../../components/common/header/index"
import List from "../List/index"
import Footer from "../../../components/footer/index"
import "./style.scss"
const TvMv = () => {
  const Location = useLocation()
  const data = Location.state
  return <div className='hong'>
    <Header title={data.datas.title}></Header>
    <div className='list'>
      <List data={data.datas}></List>
    </div>
    <Footer></Footer>
  </div>;
}
export default TvMv