
var index = async (ctx, next) => {
    await ctx.render('index');    
}

var signin = async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        await ctx.render('signin', {name: name, user:'true'});
    } else {
        await ctx.render('signin', {name: name, user:'false'});
    }
}

module.exports = {
    "GET /" : index,
    "POST /signin" : signin
};