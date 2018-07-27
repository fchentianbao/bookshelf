// 导入库
const Koa = require("koa");
const router = require("koa-router")();
const bodyParser = require('koa-bodyparser')


const app = new Koa();
app.use(bodyParser());


app.use(async (ctx, next) => {

    try {
        console.log(`${ctx.request.method} ${ctx.request.url}...`); //输出收到的请求
        await next();   
      } catch (err) {
        // some errors will have .status
        // however this is not a guarantee
        ctx.status = err.status || 500;
        ctx.type = 'html';
        ctx.body = '<p>Something <em>exploded</em>, please contact Maru.</p>';
    
        // since we handled this manually we'll
        // want to delegate to the regular app
        // level error handling as well so that
        // centralized still functions correctly.
        ctx.app.emit('error', err, ctx);
      }

 

});

// 添加路由
const index = require("./controllers/index");
router.get('/', index);
const signin = require("./controllers/signin");
router.post("/signin", signin);
const list = require("./controllers/list");
router.get("/list", list);
const viewbook = require("./controllers/viewbook");
router.get("/viewbook/:bkname", viewbook);
const newbook = require("./controllers/newbook");
router.get("/newbook", newbook);
const addbook = require("./controllers/addbook");
router.post("/addbook", addbook);


// error handle
app.on('error', function(err) {
    if (process.env.NODE_ENV != 'test') {
      console.log('sent error %s to the cloud', err.message);
      console.log(err);
    }
  });

app.use(router.routes());

app.listen(3000); // 监听端口
console.log("app starting……");