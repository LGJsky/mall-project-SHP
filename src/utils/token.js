//对外暴露一个函数
export const setToken = (token)=>{
    localStorage.setItem('TOKEN',token)
    // console.log(token);
}
export const getToken = ()=>{
    return localStorage.getItem('TOKEN')

}
export const removeToken = ()=>{
    localStorage.removeItem('TOKEN')
}
