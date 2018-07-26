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
router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

router.post('/signin', async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
});


router.get('/list', async (ctx, next) => {
    var book = {
        bkname : "不一样的卡梅拉",
        bkcontex : "我想去看海！"
    };
    ctx.response.body = `<h1>${book.bkname}</h1>
        <p> ${book.bkcontex}</p>`;
});


router.get('/viewBook/:bkname', async (ctx, next) => {
    var name = ctx.params.bkname;
    ctx.response.body = `<h1> ${name} 详情</h1>`;
});

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