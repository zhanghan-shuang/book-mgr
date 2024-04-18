const Koa=require('koa');
//引进koa包,将koa赋值给常量Koa
const app=new Koa();
//生成实例
//在引入的文件导出的是calss文件，这是一个类，要使用就需要实例化
//每次请求都会执行这个中间件，可以在这个中间件中对响应做出相关的要求

//ctx上下文 指的是当前请求的全部内容
app.use((ctx)=>{
  //console.log(ctx.URL);
//找到关于请求相关的所有内容//只有上边的代码，只有请求，没有得到响应，如何对请求做出响应：
  //console.log(ctx.path);
  //在node index.js结果输出的是/
  const {path='/'}=ctx;
  //等同于const path=ctx.path；//如果ctx里边没有path属性，上边可以直接设置默认值“/”

  //const {request:重命名={默认值}} }=ctx;//称为对象的解构
  //相当于const request=ctx.request;
  // const { request:req }=ctx;
  // //路由
  // const { url }=req;
  // //const url=req.url;
  // if (url ==='/'){
  //   ctx.response.body ='<h1>主页</h1>';
  //   return;// }
  // if (url==='/user/list') {
  //   ctx.response.body ='<h1>用户列表</h1>'
  // }
  if(path=='/user/123') {
    ctx.body='<h1>哈哈哈</h1>';
  }
  if(path=='/settings') {
    ctx.body='返回一些设置的信息';
  }
});
//开启一个Http服务//接受http请求并作处理，处理完后进行响应
app.listen(3000, ()=>{
  console.log('启动成功');
});