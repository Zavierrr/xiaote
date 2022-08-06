import { axiosInstance } from "./config";

export const getCommunityInfoRequest =
    () => axiosInstance.get('/community')
