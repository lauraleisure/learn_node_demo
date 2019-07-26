const fs=require('fs');

/*一、文件夹的读取*/

//1.同步调用:在关键位置捕获错误信息，不能造成程序崩溃
try{
    let dirs =fs.readdirSync('./');
}catch(err){
    console.log('出错了',err)
}
console.log(2222);



//2.异步调用
fs.readdir('./node01',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }

});
//错误的回调优先，在回调函数中第一个参数表示错误对象，默认为null;如果出现错误，err就是错误对象

//crud :增删查改 c(create) r(read) u(update) d(delete)

