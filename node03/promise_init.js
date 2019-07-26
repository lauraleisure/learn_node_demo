/*异步操作:
* 需要保持一定的执行顺序，回调函数的嵌套;
* 回调嵌套一多，形成回调地狱；解决办法：
* promise /  asyc / await(es7)  蓝鸟
*
* */

/*
const fs=require('fs');
fs.stat('./hehe.js',(err,stats)=>{
    if(err){
        console.log('文件不存在');
    }else{
        fs.unlink('./hehe.js',(err)=>{
            console.log(err);
            fs.writeFile('./test.js','xxxxxx',()=>{
                console.log();
            })
        })
    }
});
*/

function delfile() {
    return new Promise((reslove,reject)=>{
      reslove('成功了！');//外部走then的处理函数，表示成功了
      // reject('失败了！');//外部走catch的处理函数，表示失败的处理
    })
};

delfile().then((msg)=>{
   console.log(msg) ;
}).catch((err)=>{
    console.log(err) ;
})