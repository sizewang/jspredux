import { CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST }  from './actionTypes'
import axios from 'axios'

// 改变输入框的action
export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

// 输入框的值添加到列表的action
export const addItemAction = ()=>({
    type:ADD_ITEM,
})

// 删除列表中的值的action
export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})


export const getListAction  = (data)=>({
    type:GET_LIST,
    data
})

export const getTodoList = () =>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
            .then((res)=>{
            const data = res.data
            // console.log(data)
            const action = getListAction(action)
            dispatch(action)
        })
    }
}

