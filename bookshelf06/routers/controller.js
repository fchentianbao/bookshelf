const fs = require('fs');
const path =  require('path');

const router = require("koa-router")();

function addmapping(mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        }
        else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        }
        else if (url.startsWith('PUT ')) {
            var path = url.substring(4);
            router.put(path, mapping[url]);
            console.log(`register URL mapping: PUT ${path}`);
        }
        else if (url.startsWith('DELETE ')) {
            var path = url.substring(7);
            router.del(path, mapping[url]);
            console.log(`register URL mapping: DELETE ${path}`);
        }
        else {
            console.log(`invalid URL: ${url}`);
        }
    }
    return path;
}

function addControllers(jsDir){
    console.log(jsDir);
    fs.readdirSync(jsDir).filter((f)=>{
        return f.endsWith(".js");
    }).forEach((f) => {
        console.log(f);
        let jspath = path.join(jsDir, f);
        const mapping =  require(jspath);
        console.log(mapping);
        addmapping(mapping);
    });
}

module.exports = function () {
    let dir = "controllers";
    const jsDir = path.join(path.dirname(__dirname), dir);

    addControllers(jsDir);
    return router.routes();
};

