const CONF = {
    port: '3000',

    /**
     * sqlite 配置，用来存储 books信息 和用户信息
     */
    db:{
        client: 'sqlite3',
        connection: {
            filename: "./books.db"
        }
    },

    /**
     * MySQL 配置，用来存储 books信息 和用户信息
     */
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'cAuth',
        pass: 'wx197380d5b17ace37',
        char: 'utf8mb4'
    },
    tbuser : 'users',
    tbbook : 'books',

    sessionCon : {
        key: 'koa:sess',
       maxAge: 86400000,
           overwrite: true,
           httpOnly: true,
           signed: true,
           rolling: false,
           renew: false,
       }
};

module.exports = CONF
