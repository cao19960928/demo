

const express = require("express")
      bodyParser = require("body-parser");
    //   multer = require("multer");
    //   formData = multer();
var app = express();

app.use(express.static("wwwroot"));
app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.listen("8080",()=>{
    console.log("server is runnning...");
});


var o = {
    name:"cao",
    age:20
}
app.get("/user",function(request,response){
    console.log("服务器接收到axios-get请求");
    // o = JSON.stringify(o);
    response.status(200).send(o);
});

app.post("/regist",(request,response)=>{
    console.log("服务器接收到axios-post请求");
    response.status(200).json({"name":"wang","age":20});
    console.log(request.body);
});

app.post("/login",(request,response)=>{
    console.log("xhr请求");
    response.json({"name":"xhr"});
    console.log(request.body);
});


app.get("/password",(req,res)=>{
    console.log("密码请求已经接受到");
    res.json({"password":req.query.password});
    console.log(req.query);
})