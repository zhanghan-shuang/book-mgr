// const request =(arg,cb)=>{
//   setTimeout(()=>{
//     console.log(arg);
//     cb(arg+1);
//   },1000);
// };

// //回调地狱
// request(1, function(res1){
//   request(res1, function(res2){
//     request(res2, function(res3){
//       request(res3, function(res4){
//         request(res4, function(res5){
//           console.log('res5:',res5);
//         });
//       });
//     });

//   });
// });
//使用promise在一定程度上会解决这个问题
const request =(arg)=> {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(isreject){
        reject('出错啦');
        return;
      }
      console.log(arg);
      resolve(arg+1);
    },300);
  });
};

const fn=async() =>{
  const res1 =await request(1);
  const res2 =await request(res1);
  const res3 =await request(res2);
  const res4 =await request(res3);
  const res5 =await request(res4);
  console.log(res5);
}
// request(1)
//   .then((res1)=>{
//     return request((res1));
//   })
//   .then((res2)=>{
//     return request((res2));
//   })
//   .then((res3)=>{
//     return request((res3));
//   })
//   .then((res4)=>{
//     return request((res4));
//   })
//   .then((res5)=>{
//     console.log('res5:',res5);
//   });
