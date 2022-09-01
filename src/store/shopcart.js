import {reqCartList,reqDeleteCartById,reqUpdateCheckedById} from '@/api'
const state={
    cartList:[],
};
const mutations={
    GETCARTLIST(state,cartList){
        state.cartList=cartList
    }
};
const actions={
    async getCartList({commit}){
        let result = await reqCartList();
        // console.log(result);
        if(result.code=200){
            commit('GETCARTLIST',result.data);
        }
    },
    async deleteCartListById({commit},skuId){
        let result = await reqDeleteCartById(skuId)
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    //修改某个商品的选中状态
    async updateCheckedById({commit},{skuId,isChecked}){
        let result=await reqUpdateCheckedById(skuId,isChecked)
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    //删除勾选商品
    deleteAllCheckedCart({dispatch,getters}){
        // console.log(getters);
        let PromiseAll=[];
        getters.cartList.cartInfoList.forEach(item => {
            let promise=item.isChecked==1?dispatch('deleteCartListById',item.skuId):'';
            // console.log(promise);
            PromiseAll.push(promise);
        });
        return Promise.all(PromiseAll)
    },
    //全选商品
    updateAllCartIsChecked({dispatch,state},isChecked){
        // console.log(state);
        // console.log(isChecked);
        let PromiseAll=[]
        state.cartList[0].cartInfoList.forEach(item=>{
            let promise=dispatch('updateCheckedById',{skuId:item.skuId,isChecked});
            PromiseAll.push(promise)
        })
        return Promise.all(PromiseAll)
    }
};
const getters={
    cartList(){
        return state.cartList[0]||{}
    },
    
};

export default{
    state,
    mutations,
    actions,
    getters
}