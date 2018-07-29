var testTemp = async (ctx, next) => {
    var name = "fchentianbao@126.com";
    console.log(name);
    await ctx.render('testtemp', {name: name});
}

module.exports = {
    "GET /testTemp" : testTemp
};