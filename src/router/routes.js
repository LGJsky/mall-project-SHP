//引入路由组件
// import Home from '@/views/Home'
// import Search from '@/views/Search'
// import Login from '@/views/Login'
// import Register from '@/views/Register'
// import Detail from '@/views/Detail'
// import AddCartSuccess from '@/views/AddCartSuccess'
// import ShopCart from '@/views/ShopCart'
// import Trade from '@/views/Trade'
// import Pay from '@/views/Pay'
// import PaySuccess from '@/views/PaySuccess'
// import Center from '@/views/Center'
//引入二级路由
// import myOrder from '@/views/Center/myOrder'
// import groupOrder from '@/views/Center/groupOrder'


// const foo = ()=> {
//     console.log('sss');
//     return import("@/views/Home");
// }



export default [
    {
        path:"/center",
        component:()=>import("@/views/Center"),
        meta:{show:true},
        //二级路由组件
        children:[
            {
                path:'myorder',
                component:()=>import("@/views/Center/myOrder"),
            },
            {
                path:'grouporder',
                component:()=>import("@/views/Center/groupOrder"), 
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
    {
        path:"/paysuccess",
        component:()=>import("@/views/PaySuccess"),
        meta:{show:true}
    },
    {
        path:"/pay",
        component:()=>import("@/views/Pay"),
        meta:{show:true},
        beforeEnter:(to,from,next) => {
            if(from.path=='/trade'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:"/trade",
        component:()=>import("@/views/Trade"),
        meta:{show:true},
        beforeEnter: (to, from,next) => {
            if(from.path=='/shopcart'){
                next()
            }else{
                next(false)
            }
            
          },
    },
    {
        path:"/shopcart",
        component:()=>import("@/views/ShopCart"),
        meta:{show:true}
    },
    {
        name:'addcartsuccess',
        path:"/addcartsuccess",
        component:()=>import("@/views/AddCartSuccess"),
        meta:{show:true}
    },
    {
        path:"/detail/:skuId",
        component:()=>import("@/views/Detail"),
        meta:{show:true}
    },
    {
        path:"/home",
        component:()=>import("@/views/Home"),
        meta:{show:true}
    },
    {
        name:"search",
        path:"/search/:keyword?",
        component:()=>import("@/views/Search"),
        meta:{show:true}
    },
    {
        path:"/login",
        component:()=>import("@/views/Login"),
        meta:{show:false}
    },
    {
        path:"/register",
        component:()=>import("@/views/Register"),
        meta:{show:false}
    },
    //重定向，在项目跑起来的时候，访问/，立马定向首页
    {
        path:'*',
        redirect:"/home",
    }
]