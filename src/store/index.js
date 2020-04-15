import {createStore, applyMiddleware, compose} from 'redux' //compose使用增强函数
import reducer from './reducer'
import thunk from 'redux-thunk' //Redux-thunk 中间件
import createSagaMiddleware from 'redux-saga'
// import mySagas from './sagas'  //运行文件


const sagaMiddleware = createSagaMiddleware();   //创建saga中间件

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(thunk)) 
// const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))  //sagas中间件


const store = createStore(
    reducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    enhancer
)  // 创建数据存储仓库

// sagaMiddleware.run(mySagas) //sagas运行方法

export default store