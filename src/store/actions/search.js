import * as actionTypes from '../action-types'
import { getHotwordRequest, getSearchRequest } from '@/api/request'

export const setHotword = (data) => ({
    type: actionTypes.SET_HOTWORD,
    data
})

export const getHotword = () => {
    return (dispatch) => {
        getHotwordRequest()
            .then(data => {
                dispatch(setHotword(data))
            })
    }
}

export const setSearchList = (data) => ({
    type: actionTypes.SET_SEARCH_LIST,
    data
})


export const getSearchList = () => {
    return (dispatch) => {
        getSearchRequest()
            .then(data => {
                dispatch(setSearchList(data))
            })
    }
}

export const setQuery = (data) => ({
    type: actionTypes.SET_QUERY,
    data
})

export const getQuery = (query) => {
    return (dispatch) => {
        dispatch(setQuery(query))
    }
}
