import request from '@/utils/request'

/**
 *  用户登录
 * @param data
 */
function login(data) {
    return request({
        url: 'api/user/login',
        method: 'POST',
        data: data
    })
}

export default {
    login
}
