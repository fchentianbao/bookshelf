 var viewBook = async (ctx, next) => {
    var name = ctx.params.bkname;
    ctx.response.body = `<h1> ${name} 详情</h1>`;
}

module.exports = {
    "GET /viewBook/:bkname" : viewBook
};