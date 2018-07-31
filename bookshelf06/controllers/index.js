
var index = async (ctx, next) => {
    await ctx.render('index');    
}


var register = async (ctx, next) => {
    await ctx.render('register');
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

var registed = async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '',
        password2 = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}, password: ${password2}`);
    
    if (name !== '' && password === password2) {

        ctx.response.redirect('/list');
        ctx.response.body = '<a href="/">Index Page</a>';
    } else {
        ctx.response.redirect('/register');
    }
}

module.exports = {
    "GET /" : index,
    "POST /signin" : signin,
    "GET /register" : register
};