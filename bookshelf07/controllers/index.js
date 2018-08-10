const config = require('../config')
var knex = require('knex')(config.db);
const path =  require('path');
const fs = require('fs');
var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();

var mainPage = async (ctx, next) => {
    if (ctx.session.userinfo == undefined || ctx.session.userinfo == "" ){
        await ctx.render('index');  
    } else {
       ctx.response.redirect("/list");
    }
}

var index = async (ctx, next) => {
        await ctx.render('index');  
}

var register = async (ctx, next) => {
    await ctx.render('register');
}

var about = async (ctx, next) => {
    const rePath = path.join(path.dirname(__dirname), 'README.md');
    let mdStr = fs.readFileSync(rePath, 'utf-8',  (err, data) => {
       if (err){
           console.log(err);
       }
    });
    
    console.log("mdstr ：" + mdStr);
    mdStr = md.render(mdStr);
    
    await ctx.render('about', { markdownhtml: mdStr });
}

var signin = async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);

    await knex(config.tbuser).where({name: name, password:password}).select()
            .catch(function (e) {
                console.error(e);
            })
            .then(
                function (data) {
                    console.log(data);
                    console.log("searchRecords by dateInfo success")
                    if (data.length > 0){
                        ctx.session.userinfo = name;
                        ctx.response.redirect('/list');
                        ctx.response.body = '<a href="/">Index Page</a>';
                    }else
                    {
                        ctx.response.redirect('/');
                    }
                }
            );
}

var registed = async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '',
        password2 = ctx.request.body.password2 || '',
        email = ctx.request.body.user_email || '';
    console.log(`signin with name: ${name}, password: ${password}, password: ${password2}`);
    
    if (name !== '' && password === password2) {
        
        let user = {
            name: name,
            password: password,
            email: email
        };
        await knex(config.tbuser).insert(user)
            .catch(function (e) {
                console.error(e);
            })
            .then(
                console.log("feedback columns insert success")
            );
        console.log(user);

        ctx.response.redirect('/list');
        ctx.response.body = '<a href="/">Index Page</a>';

    } else {
        ctx.response.redirect('/register');
    }
}

module.exports = {
    "GET /" : mainPage,
    "GET /index" : index,
    "GET /about" : about,
    "POST /signin" : signin,
    "GET /register" : register,
    "POST /registed" : registed
};