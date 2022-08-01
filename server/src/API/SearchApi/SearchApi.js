const fs = require('fs');

async function Test() {
    fs.readFile('./write.js', (err, data) => {
        if (err) {
            console.log("读取错误")
            return;
        }
        console.log(data);//输出十六进制数据
        console.log(data.toString());//将十六进制转化为字符串
    })
}

module.exports = {
    Test,
};
