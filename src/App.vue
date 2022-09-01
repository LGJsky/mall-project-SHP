<template>
  <div>
    <h1 v-upper='msg'></h1>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
//引入
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name:'App',
  components:{
    Header,
    Footer
  },
  data(){
    return{
      msg:'abc'
    }
  },
  mounted() {
    //通知Vuex发请求，获取数据，存储于仓库当中
    this.$store.dispatch("categoryList");
  },
}
</script>

<style>

</style>
