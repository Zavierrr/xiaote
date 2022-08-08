// reducer + combineReducers
import * as ActionTypes from './action-types'
import { combineReducers } from 'redux'

const initalState = {
    // 发现页面数据分支：
    find: {
        communityInfo: []
    },
    // 搜索页面数据分支：
    search: {
        hotword: [],
        searchList: [],
        queryList: []
    }

}

// 合并发现页数据
const findReducer = (state = initalState.find, action) => {
    switch (action.type) {
        case ActionTypes.SET_COMMUNITY_INFO:
            return {
                ...state,
                communityInfo: action.data.data
            }
            break;
        default:
            return state
    }
}

const searchReducer = (state = initalState.search, action) => {
    switch (action.type) {
        case ActionTypes.SET_SEARCH_LIST:
            return {
                ...state,
                searchList: action.data.data
            }
            break;
        case ActionTypes.SET_HOTWORD:
            return {
                ...state,
                hotword: action.data.data
            }
            break;
        case ActionTypes.SET_QUERY:
            // 缓存query
            let query = action.data
            // 判断用户文本或者名字是否带有 query 关键字
            // let qList = state.searchList.map(item => {
            //     if (item.content.indexOf(query) != -1 || item.user.nickname.indexOf(query) != -1) {
            //         return item
            //     }
            // })
            console.log(query, '--=-=-=-');
            let qList = state.searchList.filter(item => {
                return item.content.indexOf(query) != -1 || item.user.nickname.indexOf(query) != -1
            })
            return {
                ...state,
                queryList: qList
            }
            break;
        default:
            return state
    }
}

// 暴漏数据
export default combineReducers({
    find: findReducer,
    search: searchReducer
})