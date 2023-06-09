import httpInstance from '../request'

export function getCategoryApi(id) {
    return httpInstance({
        url: '/category',
        params: {
            id
        }
    })
}

//二级分类列表数据
export function getCategoryFilterApi(id) {
    return httpInstance({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */

export function getSubCategoryApi(data) {
    return httpInstance({
        url: '/category/goods/temporary',
        method: 'post',
        data
    })
}
