# bookshelf
nodejs  koa mysql 开发我的书架，用于整理个人图书
#app需求分析，设计
需求 现在很多人家里买了很多书，随着时间的推移，自己那些书买了，那些书没买，买的书哪些已经阅读，还有那些没有阅读，书放在家里那里。有一天突然想看一本书，确找不到，双十一，618 活动想囤书，又不知道买什么书，忘记了那些书是已有的。
目的 协助人们便捷、充满乐趣以及有意义的管理自己得图书，这是我设计出发点，所围绕的中心，最终想达到的目的。
#app 功能
用户注册
用户登录
图书的录入
图书信息修改
图书查询
图书删除
想查看的书单
##数据库设计
user ｛name,  password,opneid}
book info{bname,bisbn,bpress,publishtime,bauthor,btype,bctx,bprice,bremarke,bookcase}
#原型设计设计

001，koa 我的书架， url 增删查改 
错误处理
002，koa 我的书架， 重构目录结构
003   koa 我的书架， mvc 模板
004   koa 我的书架， 数据库操作
005   koa 我的书架，  界面美化
006  静态资源
007   卡我的书架 第三方登录微信登录
008  koa我的书架，   restful API

微信小程序 设计
007   koa 我的书架，  微信界面
