const config = require('../config')
var knex = require('knex')(config.db);

var newBook = async (ctx, next) => {
    await await ctx.render('newbook');
}


var list = async (ctx, next) => {

    var books = [];
    await  knex(config.tbbook).where({user: ctx.session.userinfo}).select('bkname', 'author')
        .catch(function (e) {
            console.error(e);
        })
        .then(
            function(data){
            console.log(data);
            console.log("select books success");
            books = data;
            }
        );
    await ctx.render('list', {books:books});  
    
}

var viewBook = async (ctx, next) => {
    var name = ctx.params.bkname;
    var books = [];
    await   knex(config.tbbook).where({
        bkname: name
      }).select('bkname', 'author', 'bctx')
        .catch(function (e) {
            console.error(e);
        })
        .then(
            function(data){
            console.log(data);
            console.log("select books success");
            books = data;
            }
        );
    await ctx.render('viewbook', {books: books});
}

var addBook = async (ctx, next) => {
    var
        name = ctx.request.body.bkname || '',
        author = ctx.request.body.author || '',
        publish = ctx.request.body.publish || '',
        bkctx = ctx.request.body.context || '';
        user = ctx.session.userinfo || '';
    
        let book = {
            bkname : name,
            author : author,
            bctx : bkctx,
            bpublishtime :  publish,
            user : user
        }

        await knex(config.tbbook).insert(book)
        .catch(function (e) {
            console.error(e);
        })
        .then(
            console.log("add book success")
        );
        var viewbook = `/viewBook/${name}`;
        console.log(viewbook);
        ctx.response.redirect(encodeURI(viewbook));
       
}

module.exports = {
    "POST /addBook" : addBook,
    "GET /viewBook/:bkname" : viewBook,
    "GET /list" : list,
    "GET /newBook" : newBook
};