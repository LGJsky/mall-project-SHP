//Vue插件一定暴露一个对象
let myPlogins = {};

myPlogins.install = function(Vue,options){
    // console.log(options);
    // console.log(Vue);
    Vue.directive(options.name,(element,params)=>{
        // console.log(element,params);
        element.innerHTML=params.value.toUpperCase();
    })
}


export default myPlogins;