import React  from 'react'
import { Collapse } from 'antd-mobile'
import { useNavigate } from 'react-router-dom';
const MessageView = (props) => {
    let Navigate = useNavigate();
    let data = props.datas;
    function handleClick() {
        let bpan = JSON.parse(localStorage.getItem('bpans')) 
        
       Navigate('/comment',{state:{datas:data,name:bpan.names}})
      }
    return <div>
         <Collapse accordion>
        {data.map(item => (
            <Collapse.Panel  key={item._id} title={item.title}>
                <div onClick={handleClick}> {item.value}</div>
               
             </Collapse.Panel>
        ))}
              </Collapse>
    </div>
       
      
}
export default MessageView