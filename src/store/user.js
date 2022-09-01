import {reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo,reqLogoout} from '@/api'
import {setToken,getToken,removeToken} from '@/utils/token'
//登录与注册的模块
const state={
    code:"",
    token:getToken(),
    userInfo:{}
};
const mutations={
    GETCODE(state,code){
        state.code=code
        // console.log(code);
    },
    USERLOGIN(state,token){
        state.token=token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo=userInfo
    },
    CLEAR(state){
        state.token=''
        state.userInfo={}
        removeToken()
    }
};
const actions={
    //获取验证码
    async getCode({commit},phone){
        let result = await reqGetCode(phone);
        // console.log(result);
        if(result.code==200){
            commit("GETCODE",result.data);
            return "ok"
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    //注册
    async userRegister({commit},user){
        let result = await reqUserRegister(user);
        console.log(result);
        if(result.code==200){
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    //登录
    async userLogin({commit},data){
        let result = await reqUserLogin(data);
        // console.log(result.data.token);
        // console.log(result);
        if(result.code==200){
            commit('USERLOGIN',result.data.token)
            //持久化存储token
            setToken(result.data.token);
            return "ok"
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    //获取用户信息
    async getUserInfo({commit}){
        let result = await reqUserInfo();
        if(result.code==200){
            commit('GETUSERINFO',result.data)
            return "ok"
        }
        else{
            return Promise.reject(new Error('faile'));
        }
    },
    //退出登录
    async userLogoout({commit}){
        let result = await reqLogoout();
        // console.log(result);
        if(result.code==200){
            commit('CLEAR');
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
};
const getters={};

export default{
    state,
    mutations,
    actions,
    getters
}