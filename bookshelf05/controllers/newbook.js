var newBook = async (ctx, next) => {
    await await ctx.render('newbook');
}

module.exports = {
    "GET /newBook" : newBook
}