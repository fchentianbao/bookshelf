

const router = require("koa-router")();


// 添加路由
const index = require("../controllers/index");
router.get('/', index);
const signin = require("../controllers/signin");
router.post("/signin", signin);
const list = require("../controllers/list");
router.get("/list", list);
const viewbook = require("../controllers/viewbook");
router.get("/viewbook/:bkname", viewbook);
const newbook = require("../controllers/newbook");
router.get("/newbook", newbook);
const addbook = require("../controllers/addbook");
router.post("/addbook", addbook);


module.exports = router;