
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/test',{useNewUrlParse:true});
var db=mongoose.connection;//数据库链接对象
db.on('error',console.error.bind(console,'connection error;'));
db.once('open',function () {
    //we're connected!
    console.log('数据库链接成功！');
});
//schema对象
/*
1.创建和集合相关的 schema对象:类似表头
2.将schema对象转换为数据模型
*
* */

/*
var Schema = mongoose.Schema;
//通过mongoose获取schema对象
var blogSchema = new Schema({
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
});*/
/*1.创建和集合相关的 schema对象:类似表头*/
var userSchema = new mongoose.Schema({
    username:  {type:String,required:true},
    password: {type:String,required:true},
    age:   Number,
    sex:   {type:Number,default:0},

});
/*2.将schema对象转换为数据模型
* 该数据对象和集合关联（'集合名'，schema对象）
* */
var User=mongoose.model('user',userSchema);

User.insertMany({username:'laura',password:'123',age:31,sex:1})
 .then((data)=>{
  console.log(data);

}).catch((err)=>{
    console.log(err);
})