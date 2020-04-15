import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM, GET_LIST } from './actionTypes'



const defaultState = {
    // 默认值
    inputValue:'wtite someting',
    list:[
        '早上开会,分配任务',
        '中午吃饭',
        '晚上6.00开会'
    ]
}

export default (state = defaultState, action)=>{
    // console.log(state,action);
    if(action.type === CHANGE_INPUT){
        // Reducer里只能接收state，不能改变state
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝
        newState.inputValue = action.value
        return newState
    }
    if(action.type === ADD_ITEM){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue) //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1) //splice数组删除方法   删除数组中对应的值
        return newState
    }
    if(action.type === GET_LIST){
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list = action.data.data.list //复制性的List数组进去
        return newState
    }
    return state
}