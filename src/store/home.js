import {reqCategoryList,reqGetBannerList,reqFloorList} from '@/api'
//home模块小仓库
const state={
    //state中数据默认初始值别瞎写,服务器返回对象,服务器返回数组。【根据接口返回值初始化的】
    categoryList:[],
    bannerList:[],
    floorList:[]
};
const mutations={
    CATEGORYLIST(state,categoryList) {
        // console.log(categoryList);
        state.categoryList=categoryList;
    },
    CATBANNERLIST(state,bannerList) {
        // console.log(categoryList);
        state.bannerList=bannerList;
    },
    CATFLOORLIST(state,floorList) {
        // console.log(categoryList);
        state.floorList=floorList;
    }
};
const actions={
    //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}){
        let result = await reqCategoryList();
        // console.log(result);
        if(result.code=200){
            commit("CATEGORYLIST",result.data)
            // console.log(result);
        }
    },
    //获取首页轮播图的数据
    async getBannerList({commit}){
        let result = await reqGetBannerList();
        // console.log(result);
        if(result.code=200){
            commit("CATBANNERLIST",result.data)
            // console.log(result);
        }
    },
    //获取floor数据
    async getFloorList({commit}){
        let result = await reqFloorList();
        // console.log(result);
        if(result.code=200){
            commit("CATFLOORLIST",result.data)
            // console.log(result);
        }
    }
};
const getters={};
export default {
    state,
    mutations,
    actions,
    getters
}