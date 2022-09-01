import {reqGoodsInfo,reqAddOrUpdateShopCart} from '@/api'
//引入封装游客身份模块uuid-->生成一个随机id
import {getUUID} from '@/utils/uuid_token';
const state={
    goodInfo:{},
    uuid_token:getUUID()
};
const mutations={
    GETGOODINFO(state,goodInfo){
        state.goodInfo=goodInfo
    }
};
const actions={
    //获取产品信息
    async getGoodInfo({commit},skuId){
        let result = await reqGoodsInfo(skuId);
        if(result.code == 200){
            commit('GETGOODINFO',result.data);
        }
    },
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let result = await reqAddOrUpdateShopCart(skuId,skuNum)
        // console.log(result);
        if(result.code==200){
            return "ok"
        }else{
            // console.log('no');
            return Promise.reject(new Error('faile'));
        }
    }

}
const getters={
    //简化导航的数据
    categoryView(state){
        return state.goodInfo.categoryView||{};
    },
    //简化产品信息的数据
    skuInfo(state){
        return state.goodInfo.skuInfo||{};
    },
    //简化售卖产品属性的信息
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList||[]
    }
}
export default{
    state,
    mutations,
    actions,
    getters
}