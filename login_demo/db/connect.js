const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true });
var db=mongoose.connection;//数据库链接对象
db.on('error',console.error.bind(console,'connection error;'));
db.once('open',function () {
    //we're connected!
    console.log('数据库连接成功！');
});