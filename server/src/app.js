const express = require('express');//引入express模块
const {CloudBaseRunServer} = require('./server')

// 创建云托管 Server 实例
const server = new CloudBaseRunServer();


// 开启端口
server.listen(8080);


