/*
1.请求网站数据
2.将数据保存本地
* */
const http=require('https');
const fs=require('fs');
const cheerio=require('cheerio');
// let url='http://www.baidu.com';
let url='https://www.bilibili.com/';
http.get(url,(res)=>{
    //安全判断
    const {statusCode}=res;
    const contentType=res.headers['content-type'];
    console.log(statusCode,contentType);
    let err=null;
    if(statusCode!==200){
       err=new Error('请求状态错误');
    }else if(!/^text\/html/.test(contentType)){
        err=new Error('请求类型错误');
    }
    if(err){
        console.log(err);
        //重置缓存
        res.resume();
        return false;
    }


    /*数据处理*/
    //数据分段，只要接收数据，就会触发data事件，chunk每次接收的数据片段
    let rawData='';
    res.on('data',(chunk)=>{
      console.log('数据片段---');
        rawData+=chunk.toString('utf8');
    });
    res.on('end',()=>{
       /* //保存到本地
        fs.writeFileSync('./bibi.html',rawData);
        console.log('数据传输完毕！');
        */
       //将请求的网页数据进行转化
       let $= cheerio.load(rawData);
       $('img').each((index,el)=>{
           console.log($(el).attr('src'));
       })



    })
}).on('error',(err)=>{
    console.log('请求错误')
});//下载文件，使用的是get方法
