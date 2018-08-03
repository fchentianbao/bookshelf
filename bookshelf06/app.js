// 导入库
const Koa = require("koa");
const bodyParser = require('koa-bodyparser')
//const router = require('./routers/routers');
const controller = require('./routers/controller');
const koanumjuck2 = require('koa-nunjucks-2')
const config = require('./config')
const initdb = require("./models/initdb")
const session = require("koa-session")
const path = require('path');
 
const app = new Koa();

app.keys = ['some secret hurr']; 
app.use(session(config.sessionCon, app));

app.use(bodyParser());

app.use(koanumjuck2({
  ext: 'html',
  path: path.join(__dirname, 'views'),
  nunjucksConfig: {
    trimBlocks: true
  }
}));


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

// 初始化数据库
initdb();

app.listen(config.port); // 监听端口
console.log("app starting……");