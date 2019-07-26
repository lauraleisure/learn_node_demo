const express=require('express');
const path=require('path');
/*express实例化*/
const app=express();
/* 域名：端口号的方式访问， 直接指向规定的静态目录*/
app.use(express.static(path.join(__dirname,'./public')));
app.use('/',express.static(path.join(__dirname,'./public')));
/*设置静态目录一般指定一个具体的路径，常用/public*/
app.use('/public',express.static(path.join(__dirname,'./public')));

/*监听3000端口，开启一个服务器*/
app.listen(3000,()=>{
    console.log('server start ')
})