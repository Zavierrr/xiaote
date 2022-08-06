import * as actionTypes from '../action-types'
import { getCommunityInfoRequest } from '@/api/request'

export const setCommunityInfo = (data) => ({
    type: actionTypes.SET_COMMUNITY_INFO,
    data
})

export const getCommunityInfo = () => {
    return (dispatch) => {
        getCommunityInfoRequest()
            .then(data => {
                dispatch(setCommunityInfo(data))
            })
    }
}