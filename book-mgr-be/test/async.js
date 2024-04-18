const Koa=require('koa');

const app=new Koa();

app.use(async(context, next)=>{
  console.log(1);
  log(startTime);
  await next();
  console.log(4);
  log(endTime);
});
app.use(async(context, next)=>{
  console.log(2);
  await next();
  console.log(5);
});
app.use(async(context, next)=>{
  console.log(3);
  await next();
  console.log(6);
});

app.listen(3000, ()=>{
  console.log('启动成功');
});
//上边执行的顺序是123654