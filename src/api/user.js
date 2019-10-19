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

/**
 *  用户注册
 * @param data
 */
function register(data) {
    return request({
        url: 'api/user/register',
        method: 'POST',
        data: data
    })
}

export default {
    login,
    register
}
