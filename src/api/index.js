//当前这个模块: API进行统一管理
import axios from 'axios'
import requests from './ajax'
import mockRequests from './mockAjax'

//三级联动的接口
///api/product/getBaseCategoryList  是一个get请求 无参数

export const  reqCategoryList=()=>requests({url:'/product/getBaseCategoryList',method:'get'})   

export const reqGetBannerList=()=>mockRequests({url:'/banner',method:'get'})

export const reqFloorList=()=>mockRequests.get('/floor')


export const reqGetSearchInfo = (params)=>requests({url:"/list",method:'post',data:params})


//url:/api/item/${skuId}  method:get
export const reqGoodsInfo = (skuId) => requests({url:`/item/${skuId}`,method:'get'});

//url:/api/cart/checkCart/{skuID}/{isChecked}   method:get
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({url:`/cart/addToCart/${ skuId }/${ skuNum }`,method:'post'})
//获取购物车列表的数据接口
//url:/api/cart/cartList   method:get
export const reqCartList = ()=>requests.get('/cart/cartList')

//删除购物车产品
//url:/api/cart/checkCart/{skuID}/{isChecked}   method:get
export const reqDeleteCartById = (skuId) => requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})

//修改产品选中状态
//url:/api/cart/checkCart/{skuID}/{isChecked}   method:get
export const reqUpdateCheckedById = (skuId,isChecked) => requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})

//获取验证码
//url:/api/user/passport/sendCode/{phone}  method:get
export const reqGetCode = (phone) => requests({url:`/user/passport/sendCode/${phone}`,method:'get'})

//注册用户
//url:/api/user/passport/register method：post
export const reqUserRegister = (data) => requests({url:'/user/passport/register',data,method:'post'})

//登录
//url:/api/user/passport/login  method：post
export const reqUserLogin = (data) => requests({url:'/user/passport/login',data,method:'post'})

//获取用户信息
//url:/api/user/passport/auth/getUserInfo method:get
export const reqUserInfo = ()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'})

//退出登录
//url:/api/user/passport/logout   method:get
export const reqLogoout = ()=>requests({url:'/user/passport/logout',method:'get'})

//获取用户地址信息
//url:/api/user/userAddress/auth/findUserAddressList  method:get
export const reqAddressInfo = ()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})

//10.获取订单交易页信息
//url:/api/order/auth/trade  method:get
export const reqOrderInfo = ()=>requests({url:'/order/auth/trade ',method:'get'})

//12.提交订单
//url:/api/order/auth/submitOrder?tradeNo={tradeNo}  method:post
export const reqSubmitOrder=(tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})

//13.获取订单支付信息
//url:/api/payment/weixin/createNative/{orderId} method:get
export const reqPayInfo = (orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

//14.查询支付订单状态
//url:/api/payment/weixin/queryPayStatus/{orderId} method:get
export const reqPayStatus = (orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

//11.获取我的订单列表
//url:/api/order/auth/{page}/{limit}  method:get
export const reqMyOrderList = (page,limit) => requests({url:`/order/auth/${page}/${limit}`,method:'get'})