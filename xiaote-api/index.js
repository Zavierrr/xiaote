// api后端服务的单点入口文件 src/main.tsx 犹如景区就一个入口，方便管理
const Koa = require('koa'); // http server 
const router = require('koa-router')(); // koa 路由中间件 BrowserRouter
const app = new Koa();
// const crossDomain = require('./middleware/cross-domain') // 支持跨域
const cors = require('koa-cors')
const searchRouter = require('./routers/search');
const communityRouter = require('./routers/community')


app.use(cors())
// app.use(crossDomain) // 跨域
router.use(communityRouter);
router.use(searchRouter);
app.use(router.routes());

app.listen(3300, () => {
    console.log("Your app is running");
});