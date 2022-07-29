const express = require('express');
const open = require('open');
 
const app = express()

function
 
app.use(express.static('./dist'))
 
app.listen(8998,()=>{   //8998代表着端口号
    console.log("server running at http://127.0.0.1:8998")
})

