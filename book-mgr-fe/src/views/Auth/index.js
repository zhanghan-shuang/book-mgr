import {defineComponent }from 'vue';
//添加一些比较方便的组件
import { UserOutlined,LockOutlined,MailOutlined }from '@ant-design/icons-vue';


export default defineComponent({
  //全套使用vue3来编写
  components: {
    UserOutlined,
    LockOutlined,
    MailOutlined,
  },
  setup() {
    //初始化的时候执行一次，只执行一次

  },
});