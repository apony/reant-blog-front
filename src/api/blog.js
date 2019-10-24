// 引入文件
import request from '@/utils/request'

/**
 *  获取博客列表
 * @param params
 * 数据格式(都是可选项)
 *  pageSize 每页大小
 *  pageNum 页码
 *  sort 排序（排序类型 + asc/desc）
 *  userId 按照用户搜索
 *  title 按照标题搜索（并没有做）
 */
function getList(params) {
  return request({
    url: 'api/blog/list',
    method: 'GET',
    params: params
  })
}

/**
 *  获取单个博客
 * @param id
 */
function getOne(id) {
  return request({
    url: `api/blog/${id}`,
    method: 'GET',
  })
}

export default {
  getList,
  getOne
}
