/*全局中间件demo*/
const express=require('express');

const app=express();

app.use('/',(req,res,next)=>{
   console.log('中间件');
    let {token}=req.query;
    if(token){
        next();//是否继续往下执行
    }else{
        res.send('缺少token');
    }

});

app.get('/test1',(req,res)=>{
    res.send('text1');
});
app.get('/test2',(req,res)=>{
    res.send('text2');
});

app.listen('3001',()=>{
  console.log('server listen on port 3001 start')
})