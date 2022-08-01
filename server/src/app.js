const express = require('express');//引入express模块
const app = express();
//写方法
app.get('/data',function(req,res){
//导出数据
    let result={
        data:{
            "data1":"数据一",
            "data2":"数据二",
            "data3":"数据三"
        }
    }
    res.send(result)
})

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//开端口
const server = app.listen(8080,function(){
    console.log('服务器在8080端口打开了');
})

