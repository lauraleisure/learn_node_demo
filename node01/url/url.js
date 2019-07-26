const url=require("node01/url/url");

let urlString="http://127.0.0.1:3001/node01?name=123#ps=67";
let urlObj=url.parse(urlString);
console.log(urlObj);
let obj={
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: '127.0.0.1:3001',
    port: '3001',
    hostname: '127.0.0.1',
    hash: '#ps=67',
    search: '?name=123',
    query: 'name=123',
    pathname: '/node01',
    path: '/node01?name=123',
    href: 'http://127.0.0.1:3001/node01?name=123#ps=67'
};

let uString=url.format(obj);
console.log(uString);