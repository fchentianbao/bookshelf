var newBook = async (ctx, next) => {
    await await ctx.render('newbook');
}


var list = async (ctx, next) => {
    var book = {
        books : [
            { 
                bkname : "不一样的卡梅拉",
                bkcontex : "我想去看海！"
            },
            { 
                bkname : "平凡的世界",
                bkcontex : "平凡的世界》是中国作家路遥创作的一部百万字的小说。这是一部全景式地表现中国当代城乡社会生活的长篇小说，全书共三部。该书以中国70年代中期到80年代中期十年间为背景，通过复杂的矛盾纠葛，以孙少安和孙少平两兄弟为中心，刻画了当时社会各阶层众多普通人的形象；劳动与爱情、挫折与追求、痛苦与欢乐、日常生活与巨大社会冲突纷繁地交织在一起，深刻地展示了普通人在大时代历史进程中所走过的艰难曲折的道路。！"
            },
            { 
                bkname : "小猪佩奇",
                bkcontex : "小猪佩奇是一个可爱的小猪。她已经五岁了，与她的猪妈妈，猪爸爸，和弟弟乔治生活在一起。佩奇最喜欢做的事情是玩游戏，打扮的漂漂亮亮，度假，以及在小泥坑里快乐的跳上跳下和与苏西羊（她最好的朋友）乔治（她的弟弟）一起玩儿，拜访她的猪爷爷，猪奶奶。故事内容多数环绕日常生活，比如小孩子们参加学前游戏小组（playgroup）、探访祖父母和表亲、在游乐场游玩、踏单车等等"
            }
        ]
    };

    await ctx.render('list', book);    
}

var viewBook = async (ctx, next) => {
    var name = ctx.params.bkname;
    await ctx.render('viewbook', {name: name});
}

var addBook = async (ctx, next) => {
    var
        name = ctx.request.body.bkname || '',
        author = ctx.request.body.author || '',
        bkctx = ctx.request.body.context || '';

        await ctx.render('addbook', {name:name, author:author, bkctx : bkctx});   
}

module.exports = {
    "POST /addBook" : addBook,
    "GET /viewBook/:bkname" : viewBook,
    "GET /list" : list,
    "GET /newBook" : newBook
};