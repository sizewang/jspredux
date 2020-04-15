import React from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'

const TodoListUi = (props)=>{
    return ( 
        <div style={{margin:'10px'}}>
        <div>
            <Input 
                placeholder={props.inputValue}
                style={{ width:'250px', marginRight:'10px'}}
                onChange={props.changeInputValue}
                value={props.inputValue}
            />
            <Button type="primary" onClick={props.clickBtn}>增加</Button>
        </div>
        <div style={{margin:'10px',width:'300px'}}>
            <List
                bordered
                dataSource={props.list}
                renderItem={
                    (item,index)=>(
                    <List.Item 
                        onClick={()=>{props.deleteItem(index)}}
                    >
                        {item}
                    </List.Item>)
                }
            />
        </div>
    </div>
     );
}



// 把UI组件改成无状态组件可以提高程序性能
// 1.首先我们不在需要引入React中的{ Component }，删除就好。
// 2.然后些一个TodoListUI函数,里边只返回JSX的部分就好，这步可以复制。
// 3.函数传递一个props参数，之后修改里边的所有props，去掉this。
// class TodoListUi extends Component {

//     render() { 
//         return ( 
//             <div style={{margin:'10px'}}>
//             <div>
//                 <Input 
//                     placeholder={this.props.inputValue}
//                     style={{ width:'250px', marginRight:'10px'}}
//                     onChange={this.props.changeInputValue}
//                     value={this.props.inputValue}
//                 />
//                 <Button type="primary" onClick={this.props.clickBtn}>增加</Button>
//             </div>
//             <div style={{margin:'10px',width:'300px'}}>
//                 <List
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={
//                         (item,index)=>(
//                         <List.Item 
//                             onClick={()=>{this.props.deleteItem(index)}}
//                         >
//                             {item}
//                         </List.Item>)
//                     }
//                 />
//             </div>
//         </div>
//          );
//     }
// }

export default TodoListUi;