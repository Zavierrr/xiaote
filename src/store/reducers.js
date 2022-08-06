// reducer + combineReducers
import * as ActionTypes from './action-types'
import { combineReducers } from 'redux'

const initalState = {
    // 发现页面数据分支：
    find: {
        communityInfo: []
    }
}

// 合并发现页数据
const FindReducer = (state = initalState.find, action) => {
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

// 暴漏数据
export default combineReducers({
    find: FindReducer
})