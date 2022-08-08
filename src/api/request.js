import { axiosInstance } from "./config";

export const getCommunityInfoRequest =
    (params) => axiosInstance.get(`/community/${params}`)

export const getHotwordRequest =
    () => axiosInstance.get(`/hotword`)

export const getSearchRequest =
    () => axiosInstance.get(`/search`)