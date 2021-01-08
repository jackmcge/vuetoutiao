import request from '@/utils/request'

// 获取搜索联想建议
export const getsearchsuggestions =q=>{
    return request({
        method:'GET',
        url:'/app/v1_0/suggestion',
        params:{
            q
        }
    })
}
//获取收缩结果
export const getSearchResult =params=>{
    return request({
        method:'GET',
        url:'/app/v1_0/search',
        params
    })
}
