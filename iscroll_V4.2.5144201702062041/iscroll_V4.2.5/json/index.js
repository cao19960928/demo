var express = require('express');
var bodyParser = require('body-parser');
// 使用form表单必须要使用的一个模块
var mul = require('multer');  // 1
var app = express();
var formData = mul();  // 2
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.get('/comment',function(request,response)
{
    console.log(request.query);
    // 发送数据返回到前端
    setTimeout(function() 
    {
       response.send('已经接受用get方法发送的评价') 
    }, 2000);
})
// app.post('/comment',function(request,response)
// {
//     console.log(request.body);
//     setTimeout(function(){
//         response.send('已经接收到用post方法发送的评价');
//     },1000)
// })



// 3 
// 如果使用formdata提交的数据 必须在参数中使用array() 
// array() 会先解析请求体当中的数据 然后将再将数据传给 function的request和response
app.post('/comment',formData.array(),function(request,response)
{
    // 获取请求的路由信息
    console.log(request.route);
    // 获取ip
    console.log(request.ip);
    // 获取请求体
    console.log(request.body);
    // protocol 请求协议
    console.log(request.protocol);
    console.log(request.body);
    response.send('接收到了form表单提交的信息');
})
app.listen('8080',function()
{
    console.log('服务器已启动');
})