var express = require('express');
var app = express();
var path = require('path');
var https = require('https');
var http = require('http');
var fs = require('fs');
http.createServer(app).listen(8080);
console.log('Server is start in localhost:8080');
app.use(express.static(path.join(__dirname, './')));

/**
 * 通过nodejs路由来实现angular router直接输入网址不出现404页面
 */
app.use(function (req, res) {
    console.log(req.path);
    if(req.path.indexOf('/api')>=0){
        res.send("server text");
    }else{ //angular启动页
        res.sendFile(__dirname + '/index.html');
    }
});