const cheerio=require('cheerio');
/*将一组html字符串转换成类DOM格式，然后可以使用jquery选择器来选择其中的元素*/
let $=cheerio.load('<div><p>你好</p><img src="http://www.baidu.com"/><img src="http://www.baiduli.com"/></div>');
console.log($('img').attr('src'));
console.log($('p').text());

$('img').each((index,el)=>{
  console.log($(el).attr('src'));
})