import React  from 'react'
import { Collapse  } from 'antd-mobile'
const MessageView = (props) => {
    let data = props.datas;
    return <div>
         <Collapse accordion>
        {data.map(item => (
             <Collapse.Panel key={item._id} title={item.value}>
                {item.context}
             </Collapse.Panel>
        ))}
              </Collapse>
    </div>
       
      
}
export default MessageView