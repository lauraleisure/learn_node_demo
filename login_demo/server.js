const express=require('express');
/*express实例化*/
const app=express();
/*引用数据库连接*/
const db=require('./db/connect');//连接数据库
const Mail=require('./utils/mail');//连接数据库

//app.use使用中间件（插件）
/*解析表单数据*/
var bodyParser = require('body-parser');
// 解析表单提交的post数据格式： application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// 解析post提交的json形式的 数据格式 application/json
app.use(bodyParser.json());

/*路由*/
const userRouter=require('./router/userRouter');
app.use('/user',userRouter);
/*发送邮箱验证码*/
app.post('/getMailCode',(req,res)=>{
    let {mail}=req.body;
    let code=parseInt(Math.random()*10000);
    Mail.send(mail,code)
        .then(()=>{
            res.send({err:0,msg:'ok'})
        }).catch((err)=>{
         res.send({err:-1,msg:'失败'+err})
        });

});
/*监听3000端口，开启一个服务器*/
app.listen(3000,()=>{
    console.log('server start ')
})