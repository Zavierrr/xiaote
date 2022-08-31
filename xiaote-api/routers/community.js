const router = require('koa-router')();
const {
    fetchCommunityInfo
} = require('../api')


// ctx = req 用户请求 + 中间件{n}   +  res响应结果 
// 接口服务
router.get("/community/:page", async (ctx, next) => {
    let limit = 10
    let { page } = ctx.params
    try {
        const data = await fetchCommunityInfo(); 
        let resData = {
            code: "0", // 成功响应200
            msg: "success" // 成功 | 失败原因
        }
        const dataSlice = data.slice(0, page * limit)
        if (dataSlice) {
            resData.data = dataSlice;
        } else {
            resData.code = "1";
            resData.msg = "fail";
        }
        ctx.body = resData
    } catch (e) {
        next(e)
    }
})

module.exports = router.routes();
