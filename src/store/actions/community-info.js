import * as actionTypes from '../action-types'
import { getCommunityInfoRequest } from '@/api/request'

export const setCommunityInfo = (data) => ({
    type: actionTypes.SET_COMMUNITY_INFO,
    data
})

export const getCommunityInfo = (page) => {
    return (dispatch) => {
        getCommunityInfoRequest(page)
            .then(data => {
                dispatch(setCommunityInfo(data))
            })
    }
}

export const addCommunityInfo = (data) => {
    return (dispatch) => {
        dispatch(setCommunityInfo(data))
    }
}
