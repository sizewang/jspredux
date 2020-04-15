import React, { Component } from 'react'
import store from './store/index'
import { getTodoList ,changeInputAction, addItemAction, deleteItemAction, getListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'
// import axios from 'axios'


 class TodoList extends Component {
     constructor(props){
         super(props)
        //  console.log(store.getState());
         this.state= store.getState()
         this.changeInputValue = this.changeInputValue.bind(this)
         this.storeChange = this.storeChange.bind(this)
         store.subscribe(this.storeChange)
         this.clickBtn = this.clickBtn.bind(this)
         this.deleteItem = this.deleteItem.bind(this)
     }
    render() {
        return (
           <TodoListUI 
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                list={this.state.list}
                deleteItem={this.deleteItem}
           />
        );
    }

    componentDidMount(){
        // 请求后台接口数据
        // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
        //     // console.log(res)
        //     const data = res.data
        //     const action = getListAction(data)
        //     store.dispatch(action)
        // })
        const action = getTodoList()
        store.dispatch(action)
    }


    storeChange(){
        this.setState(store.getState())
    }
    changeInputValue(e){
        // const action = {
        //     type:CHANGE_INPUT,
        //     value:e.target.value
        // }
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    clickBtn(){
        // const action = {
        //     type:ADD_ITEM
        // }
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        // const action = {
        //     type:DELETE_ITEM,
        //     index
        // }
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    


}

export default TodoList

