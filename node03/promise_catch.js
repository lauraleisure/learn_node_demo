const fs=require('fs');

//封装
function isExist() {
    return new Promise((reslove,reject)=>{
        fs.stat('./hehe.js',(err,stats)=>{
            if(err){
                reject('文件不存在');
            }else{
                reslove('文件存在');
            }
        })
    });
}

/*删除文件*/
function delFile() {
    return new Promise((reslove,reject)=>{
       fs.unlink('./hehe.js',(err)=>{
           if(err){
               reject('del no ok');
           }else{
               reslove('del ok');
           }
       })
    });
}
/*链式调用，一组链式调用中，只需要一个catch；
* 如何手动终止链式调用的执行：通过抛出一个错误，来实现
* */
isExist().then((msg)=>{
    console.log('is Exist 的成功处理',msg);
    return delFile();
}).then((data)=>{
    console.log('删除文件的成功处理',data);
    throw new Error('手动终止');
}).then(()=>{
    console.log('test 11');
}).then(()=>{
    console.log('test 22');
}).catch((err)=>{
    console.log(err)
});
/*如何手动终止链式调用的执行*/