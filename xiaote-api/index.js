// api后端服务的单点入口文件 src/main.tsx 犹如景区就一个入口，方便管理
const Koa = require('koa'); // http server 
const router = require('koa-router')(); // koa 路由中间件 BrowserRouter
const app = new Koa();
const crossDomain = require('./middleware/cross-domain') // 支持跨域
const cors = require('koa-cors')
const {
    fetchCommunityInfo
} = require('./api')

// ctx = req 用户请求 + 中间件{n}   +  res响应结果 
// 接口服务
router.get("/community", async (ctx, next) => {
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

app.use(cors())
// app.use(crossDomain)
app.use(router.routes())

app.listen(3300, () => {
    console.log("Your app is running");
});