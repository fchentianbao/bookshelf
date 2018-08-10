# bookshelf
nodejs  koa mysql 开发我的书架，用于整理个人图书
***
## 1、使用
打开命令行 CMD 输入
    $ git clone https://github.com/fchentianbao/bookshelf.git

    $ cd bookshelf** 

    $ npm install    

    $ npm run start
	
	浏览器中输入  http://127.0.0.1:3000/  进行访问

如果需要 运行代码 调试开发，可以使用 VScode  直接打开文件夹，按F5 运行调试

## app需求分析，设计
需求 现在很多人家里买了很多书，随着时间的推移，自己那些书买了，那些书没买，买的书哪些已经阅读，还有那些没有阅读，书放在家里那里。有一天突然想看一本书，确找不到，双十一，618 活动想囤书，又不知道买什么书，忘记了那些书是已有的。
目的 协助人们便捷、充满乐趣以及有意义的管理自己得图书，这是我设计出发点，所围绕的中心，最终想达到的目的。
## app 功能
- 用户注册
- 用户登录
- 图书的录入
- 图书信息修改
- 图书查询
- 图书删除
- 想查看的书单
## 数据库设计
user ｛name,  password,opneid}
book info{bname,bisbn,bpress,publishtime,bauthor,btype,bctx,bprice,bremarke,bookcase}
## 目录

- bookshelf01，koa 我的书架， 第一版 app.js 中实现用户登陆，添加图书/查看图书 
错误处理
- bookshelf02，koa  代码，整理项目代码目录结构，提取 路由函数到 controllers 目录，
- bookshelf03，koa 我的书架， 重构路由，自动注册路由函数
- bookshelf04，koa 我的书架，自动注册路由
- bookshelf05，koa 我的书架， 增加模板 MVC 使用koa-nunjucks-2进行模板渲染
- bookshelf06，koa 我的书架,使用 koa-kenx  sqlite 保存用户信息，图书信息，数据库操作
- bookshelf07，koa 我的书架,使用 koa-static  静态资源,使用 bootstrap 进行界面美化

008  koa我的书架，   restful API

微信小程序 设计
007   koa 我的书架，  微信界面
