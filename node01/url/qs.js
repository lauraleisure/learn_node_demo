const qs=require('querystring');

let string='name=wangyi&pass=123&sex=0';
let obj=qs.parse(string,'&','=');
console.log(obj);



/*stringify*/
let obj1={ name: 'wangyi', pass: '123', sex: '0' };
let string1=qs.stringify(obj,'&','=');
console.log(string1);