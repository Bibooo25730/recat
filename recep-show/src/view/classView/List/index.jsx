import React, { useState}from 'react'
import { Button } from 'antd-mobile'
import ListView from './listView/listView';

const List = (props) => {
    let [fileType, setFiletype] = useState();
    let [currpage, setcurrPage] = useState(1)
    let [title, setTitle] = useState(1)
    React.useEffect(() => {
        setTitle(title = props.data.title)
        let  fileTypes = props.data.fileType.filter((item, index) => {
            return index < 10
        })
        setFiletype(fileType = fileTypes)
        //
        return function cleanup() { console.log("组件被卸载componentWillUnmount")};
    },[]);
    React.useEffect(()=>{
        let start = (currpage - 1) * 10;
        let end = currpage * 10
        let fileTypes = props.data.fileType.slice(start, end)
        if (fileTypes.length === 0) {
          
        }
      setFiletype(fileType = fileTypes)
       
    },[currpage]);
  
  
    function handleNext() {
        setcurrPage(currpage + 1)
    }
    function handleback() {
        setcurrPage(currpage - 1)
    }
    return (
        <div className='listView'>
            <ListView titles={title} data={fileType}></ListView>
            <div className='sorter'>
                { currpage === 1 ? <Button disabled >上一页</Button>: <Button onClick={handleback}>上一页</Button>}
                <Button onClick={handleNext}>下一页</Button>
            </div>
        </div>
    )
}
export default  List
