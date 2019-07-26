const mongoose=require('mongoose');
var userSchema = new mongoose.Schema({
    username:  {type:String,required:true},
    password: {type:String,required:true},
    age:   Number,
    sex:   {type:Number,default:0},

});
/*2.将schema对象转换为数据模型
* 该数据对象和集合关联（'集合名'，schema对象）
* */
var User=mongoose.model('users',userSchema);
module.exports=User;