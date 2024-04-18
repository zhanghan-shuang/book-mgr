import { createRouter, createWebHashHistory } from 'vue-router';


const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth/index.vue'),
  },
  //是/的时候就渲染home页面，是/about的时候就渲染about页面
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  //   //异步渲染的方式，只有加载的时候才把这个js文件从远端拿下来进行渲染
  //   //以后每一步都使用这种方式把每个页面的组件切出来
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
