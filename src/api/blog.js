// 引入文件
import request from '@/utils/request'

/**
 *  获取博客列表
 * @param pageNum 页码
 * @param pageSize 页数
 */
export function getBlogList(pageNum,pageSize) {
  return request({
    url: 'api/blog/get',
    method: 'get',
    // params: {
    //   pageNum,pageSize
    // }
  })
}