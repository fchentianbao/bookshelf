var newBook = async (ctx, next) => {
    ctx.response.body = `<h1>add new book</h1>
        <form action="/addbook" method="post">
            <p>书名: <input name="bkname" value="图书名称"></p>
            <p>作者: <input name="author" ></p>
            <p>简介: <input name="context" ></p>
            <p><input type="submit" value="添加"></p>
        </form>`;
}

module.exports = {
    "GET /newBook" : newBook
}