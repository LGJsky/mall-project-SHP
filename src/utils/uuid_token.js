import { v4 as uuidv4 } from 'uuid';
export const getUUID=()=>{
    let uuid_token=localStorage.getItem('UUIDTOKEN');
    //判断：本地如果没有
    if(!uuid_token){
        //我生成随机id即临时游客身份
        uuid_token=uuidv4();
        localStorage.setItem('UUIDTOKEN',uuid_token);
    }
    return uuid_token;
}