import Vue from 'vue'
import App from './App.vue'
//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import { Button,MessageBox} from 'element-ui';
//第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);
Vue.component(Pagination.name,Pagination);
//注册全局组件
Vue.component(Button.name, Button);
//ElementUI注册组件另一种：原型上注册
Vue.prototype.$msgbox = MessageBox,
Vue.prototype.$alert = MessageBox.alert;

//引入路由
import router from '@/router';
//引入vuex仓库
import store from '@/store';
//引入mockServe.js----mock数据
import '@/mock/mockServe';
Vue.config.productionTip = false
//测试
import {reqCategoryList} from '@/api';

reqCategoryList();
//统一接口api文件夹里面全部请求函数
import * as API from '@/api';
// console.log(API);
//引入swiper样式
import "swiper/css/swiper.css";
// import atm from '@/assets/images/1.gif'
const atm = require('@/assets/images/1.gif')

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: atm,
  attempt: 1
})



//引入自定义插件
import myPlugins from '@/plugins/myPlugins'

Vue.use(myPlugins,{
  name:'upper'
});

//引入表单校验插件
import '@/plugins/validate'
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus=this,
    Vue.prototype.$API=API
  },
  //注册路由：底下的写法KV一致省略V{router小写}
  //注册路由信息:当这里书写router的时候,组件身上都拥有$route,$router
  router,
  //注册仓库：组件实例的身上会多一个属性$store属性
  store
}).$mount('#app')
