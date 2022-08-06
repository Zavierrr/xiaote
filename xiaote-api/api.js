// node 版本 es6 晚 
const fetch = require("node-fetch"); // 在后端发送一个请求    rpc 调用 
// 社区信息
const URL_COMMUNITY = "https://lcen.xiaote.net/api/v1/communities";

const fetchCommunityInfo = () => {
    const params = [
        "page_index=1",
        "page_size=20",
        "tid="
    ];
    return fetch(URL_COMMUNITY + "?" + params.join("&"))
        .then(res => res.json())
        .then(json => json)
}

module.exports = {
    fetchCommunityInfo
}