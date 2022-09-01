//配置路由的地方
//引入vue和vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

//引入store
import store from '@/store'
//使用插件
Vue.use(VueRouter)

//先把VueRouter原型对象的push，先保存一份
let originPush=VueRouter.prototype.push;
let originReplace=VueRouter.prototype.replace;

//重写push|replace
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace=function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}

//暴露  配置路由
let router = new VueRouter({
    //配置路由
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
    },
})
//全局守卫：前置守卫(在路由跳转之前进行判断)
router.beforeEach(async (to, from,next) => {
    // console.log(from);
    // console.log(to);
    // console.log(store);
    // next()
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    // console.log(name);
    //token有值即用户已经登录了
    if(token){
        //如果用户已经登录了还想去login，不能去，直接next()首页
        if(to.path=='/login'||to.path=='/register'){
            next('/home')
            // console.log('111');
        }else{
            //用户登录了去其他home|search等这些页面
            //如果用户名已有了
            if(name){
                next()
                // console.log('222');
            }else{
                //如果用户名没有
                //获取用户信息
                try {
                    await store.dispatch('getUserInfo');
                    next();
                    // console.log('333');
                } catch (error) {
                    //token失效了，返回login，清除数据
                    await store.dispatch('userLogoout');
                    next('/login')
                }
            }
        }
    }else{
        let toPath=to.path;
        if(toPath.indexOf('/trade')!=-1||toPath.indexOf('/pay')!=-1||toPath.indexOf('/center')!=-1){
            next('/login?redirect='+toPath)
        }else{
            next() 
        }
        // console.log('444');
    }
  })

export default router;