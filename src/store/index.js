import { applyMiddleware, compose, createStore } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
// window interface __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 终极解决方案
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers,
    composeEnhancers(
        applyMiddleware(thunk) 
    ))

export default store