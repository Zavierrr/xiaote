const router = require('koa-router')();
const {
    fetchHotword,
    fetchCommunityInfo
} = require('../api')


router.get("/search", async (ctx) => {
    try {
        const data = await fetchCommunityInfo(); // 后端远程调用：rpc 调用
        let resData = {
            code: "0", // 成功响应200
            msg: "success" // 成功 | 失败原因
        }
        if (data) {
            resData.data = data;
        } else {
            resData.code = "1";
            resData.msg = "fail";
        }
        ctx.body = resData
    } catch (e) {
        next(e)
    }
})

router.get("/hotword", async (ctx) => {
    try {
        const data = await fetchHotword(); // 后端远程调用：rpc 调用
        let resData = {
            code: "0", // 成功响应200
            msg: "success" // 成功 | 失败原因
        }
        if (data) {
            resData.data = data.results;
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
