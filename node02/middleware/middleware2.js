
/*局部中间件demo*/
const express=require('express');

const app=express();
/*局部中间件语法：app.use('pathname',fun1,func2,func3)*/
app.use('/test',(req,res,next)=>{
   console.log('中间件');
    let {token}=req.query;
    if(token){
        next();//是否继续往下执行
    }else{
        res.send('缺少token');
    }
},(req,res)=>{
    res.send('test中间件 局部中间件');
});

app.use((req,res,next)=>{})

app.get('/test1',(req,res)=>{
    res.send('text1');
});
app.get('/test2',(req,res)=>{
    res.send('text2');
});

app.listen('3001',()=>{
  console.log('server listen on port 3001 start')
})