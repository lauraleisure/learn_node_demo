const express=require('express');
/*express实例化*/
const app=express();
//app.use使用中间件（插件）
/*解析表单数据*/
var bodyParser = require('body-parser');
// 解析表单提交的post数据格式： application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// 解析post提交的json形式的 数据格式 application/json
app.use(bodyParser.json());

/*
app.get('/user/login',(req,res)=>{
    console.log('你好 ');
    res.send({err:false,message:'login ok '});
});

app.post('/user/register',(req,res)=>{
    console.log(req.body);
    res.send({err:false,message:'register ok '});
})
*/

let userRouter=require('./router/userRouter');
let foodRouter=require('./router/foodRouter');
app.use('/user',userRouter);
app.use('/food',foodRouter);


/*监听3000端口，开启一个服务器*/
app.listen(3000,()=>{
    console.log('server start ')
})