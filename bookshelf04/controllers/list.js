var list = async (ctx, next) => {
    var book = {
        bkname : "不一样的卡梅拉",
        bkcontex : "我想去看海！"
    };
    ctx.response.body = `<h1>${book.bkname}</h1>
        <p> ${book.bkcontex}</p>`;
}

module.exports = {
  "GET /list" : list
};