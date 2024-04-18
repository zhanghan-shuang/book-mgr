//链接数据库要使用mongoose，首先把mongoose引入进来
const mongoose= require('mongoose');

//给哪个数据库
//哪个集合
//添加什么格式的文档

const UserSchema =new mongoose.Schema({
  nickname:String,
  password:String,
  age:Number,

});
//每个文档都有三个属性，映射到一个User集合

//根据schema生成的一套方法，这些方法来操作集合和集合下的文档，这个使用model来实现
const UserModel =mongoose.model('User',UserSchema);
//使用UserModel存储通过UserSchema形成操作文档的方法，现在 可以通过UserModel来创建，修改一些文档

const connect =()=>{
  //去链接数据库
  mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');

  //当数据库被打开的时候做一些事情
  mongoose.connection.on('open',()=>{
    console.log('连接成功！');

    //创建文档
    const user=new UserModel({
      //new一下创建UserModel实体
      nickname:'小红',
      password:'123456',
      age:12,
    });

    user.age=99;
    //保存，同步到MongoDB
    user.save();
  });

};//这个函数的作用就是用来链接数据库的
connect();
