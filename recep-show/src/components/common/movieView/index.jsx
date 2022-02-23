import React  from 'react'
import { useLocation } from 'react-router-dom'
import { Divider,Image } from 'antd-mobile'
import Header from '../header/index';
import './style.scss'
const Movie = (prop) => {
    const Location = useLocation();
    const data = Location.state;
    const datas = data.data;
    return <div className='movie'><Header title={data.title}></Header>
       <Divider
          style={{
            color: '#000000',
            borderColor: '#C86E90',
            borderStyle: 'dashed',
          }}
        >
          {datas.filmtitle}
        </Divider>
        <Image lazy src={datas.fileImg} fit='fill' />
        <div className='fileType'>
            <h2>剧情简介：</h2>
            <div dangerouslySetInnerHTML={{__html:datas.filebrief}}></div>
        </div>
        <div className='wp'>
            <h2>网盘链接：</h2>
            <a href={datas.network}>链接：</a>
        </div>
        <div className='pass'>
            <p>本人发布资源均来自于公开网络,感谢原制作者及相关载体。如果涉及版权问题,请联系邮箱951225758@qq.com</p>
            {datas.password}
            
        </div>
    </div>
}
export default  Movie
