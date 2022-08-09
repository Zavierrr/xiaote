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
        queryList: [],
        historyKey: []
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

// 历史记录是否加入数组，防止重复
const addToList = (list, data) => {
    const l = list.length;
    for (let i = 0; i < l; i++) {
        if (list[i].data == data) {
            return false
        }
    }
    return true
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
        case ActionTypes.SET_HISTORY_KEY:
            const list = state.historyKey
            const obj = {}
            obj.data = action.data
            if (!action.data) {
                return state
            } else if (addToList(list, obj.data)) {
                list.unshift(obj)
                return {
                    ...state,
                    historyKey: list.slice(0, 10)
                }
            } else return state
            break;
        case ActionTypes.SET_QUERY:
            // 缓存query
            let query = action.data
            // 判断用户文本或者名字是否带有 query 关键字
            let qList = state.searchList.filter(item => {
                return item.content.indexOf(query) != -1 || item.user.nickname.indexOf(query) != -1
            })
            return {
                ...state,
                queryList: qList
            }
            break;
        case ActionTypes.SET_DELETE_ALL:
            return {
                ...state,
                historyKey: []
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