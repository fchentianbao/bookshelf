var addBook = async (ctx, next) => {
    var
        name = ctx.request.body.bkname || '',
        author = ctx.request.body.author || '',
        bkctx = ctx.request.body.context || '';

    ctx.response.body = `<h1>Welcome, ${name}!</h1>
        <p> 作者： ${author}</p>
        <p> 简介： ${bkctx}</p>`;
}

module.exports = {
    "POST /addBook" : addBook
};