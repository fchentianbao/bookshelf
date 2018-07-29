var addBook = async (ctx, next) => {
    var
        name = ctx.request.body.bkname || '',
        author = ctx.request.body.author || '',
        bkctx = ctx.request.body.context || '';

        await ctx.render('addbook', {name:name, author:author, bkctx : bkctx});   
}

module.exports = {
    "POST /addBook" : addBook
};