// 导入库
const Koa = require("koa");
const bodyParser = require('koa-bodyparser')
//const router = require('./routers/routers');
const controller = require('./routers/controller');
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
        ctx.body = '<p>Something <em>exploded</em>, please contact fchentianbao@126.com.</p>';
    
        // since we handled this manually we'll
        // want to delegate to the regular app
        // level error handling as well so that
        // centralized still functions correctly.
        ctx.app.emit('error', err, ctx);
      }
});



// error handle
app.on('error', function(err) {
    if (process.env.NODE_ENV != 'test') {
      console.log('sent error %s to the cloud', err.message);
      console.log(err);
    }
  });


//app.use(router.routes());
app.use(controller());

app.listen(3000); // 监听端口
console.log("app starting……");