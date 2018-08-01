const config = require('../config')
var knex = require('knex')(config.db);

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

    await knex(config.tbuser).where({name: name, password:password}).select()
            .catch(function (e) {
                console.error(e);
            })
            .then(
                function (data) {
                    console.log(data);
                    console.log("searchRecords by dateInfo success")
                    if (data.length > 0){
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
    "GET /" : index,
    "POST /signin" : signin,
    "GET /register" : register,
    "POST /registed" : registed
};