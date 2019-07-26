const fs=require('fs');
//创建目录
/*fs.mkdir('./test',(err)=>{
    if(err){
        console.log('创建失败',err)
    }
});*/

//更改
/*fs.rename('./test','./test01',(err)=>{
    if(err){
        console.log('更改失败',err)
    }else{
        console.log('ok');
    }

});*/
//删除:只能删除空文件夹
fs.rmdir('./node01',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('ok');
    }
});