const config = require('../config')
var knex = require('knex')(config.db);

var newBook = async (ctx, next) => {
    await await ctx.render('newbook');
}


var list = async (ctx, next) => {

    var books = [];
    await  knex.select('bkname', 'author').from(config.tbbook)
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
    
        let book = {
            bkname : name,
            author : author,
            bctx : bkctx,
            bpublishtime :  publish
        }

        await knex(config.tbbook).insert(book)
        .catch(function (e) {
            console.error(e);
        })
        .then(
            console.log("feedback columns insert success")
        );
        await ctx.render('addbook', {name:name, author:author, bkctx : bkctx});   
}

module.exports = {
    "POST /addBook" : addBook,
    "GET /viewBook/:bkname" : viewBook,
    "GET /list" : list,
    "GET /newBook" : newBook
};