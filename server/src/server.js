const express = require('express');
const http = require('http');
const open = require('open');


class ExpressServer {
    constructor (){
        this.app = express();
        this.app.all('*', function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
            res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
            res.header("X-Powered-By",' 3.2.1')
            res.header("Content-Type", "application/json;charset=utf-8");
            next();
        });
        this.server = http.createServer(this.app);
        //使用中间件
        this.app.use(express.urlencoded({ extended: true }))
        this.app.post('/search',(req,res)=>{
            open(req.body.target)
        })
    }

    // 开启端口
    listen(port) {
        this.server.listen(port);
        console.log(`server start at http://localhost:8080`);
    }
}

module.exports.CloudBaseRunServer = ExpressServer;