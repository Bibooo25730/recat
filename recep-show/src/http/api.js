import request from "./index"
// 请求验证码
export async function getCode(email) {
    let result = ''
    await request({
        url: '/user/email',
        method: 'post',
        data: email,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        response => {
            result = response.data
        },
        error => {
            result = error;
        },
    )
    return result

}
// 注册
export async function getRegister(user) {
    let result = ''
    await request({
        url: '/user/register',
        method: 'post',
        data: user,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        response => {
            result = response.data
        },
        error => {
            result = error;
        },
    )
    return result

}
// 登录
export async function getLogin(user) {
    let result = ''
    await request({
        url: '/user/login',
        method: 'post',
        data: user,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        response => {
            result = response.data
        },
        error => {
            result = error;
        },
    )
    return result

}
// bananer
export async function getBananer() {
    let result = ''
    await request({
        url: '/home/bananer',
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        response => {
            result = response.data
        },
        error => {
            result = error;
        },
    )
    return result

}
// 分类
export async function getMovie() {
    let result = ''
    await request({
        url: '/movie/CheckMovie',
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        response => {
            result = response.data
        },
        error => {
            result = error;
        },
    )
    return result

}
// 提交反馈
export async function getFeead(value) {
    let result = ''
    await request({
        url: '/home/back',
        method: 'post',
        data:value,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        response => {
            result = response.data
        },
        error => {
            result = error;
        },
    )
    return result

}
// 查找影片
export async function getIdMovie(title) {
    let result = ''
    await request({
        url: '/movie/checkId',
        method: 'post',
        data:title,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        response => {
            result = response.data
        },
        error => {
            result = error;
        },
    )
    return result

}
// 模糊搜索影片
export async function getSearch(title) {
    let result = ''
    await request({
        url: '/movie/searchMv',
        method: 'post',
        data:title,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        response => {
            result = response.data
        },
        error => {
            result = error;
        },
    )
    return result

}
// 求片
export async function getSubmit(data) {
    let result = ''
    await request({
        url: '/forum/submit',
        method: 'post',
        data:data,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        response => {
            result = response.data
        },
        error => {
            result = error;
        },
    )
    return result

}
// 查询求片
export async function getCheck() {
    let result = ''
    await request({
        url: '/forum/check',
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        response => {
            result = response.data
        },
        error => {
            result = error;
        },
    )
    return result

}
// 查询自己求片
export async function getUserCheck(user) {
    let result = ''
    await request({
        url: '/forum/userCheck',
        method: 'post',
        data:user,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        response => {
            result = response.data
        },
        error => {
            result = error;
        },
    )
    return result

}
// 回复
export async function getAdd(data) {
    let result = ''
    await request({
        url: '/forum/add',
        method: 'post',
        data:data,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        response => {
            result = response.data
        },
        error => {
            result = error;
        },
    )
    return result

}
// 查询回复
export async function getComCheck(user) {
    let result = ''
    await request({
        url: '/forum/comCheck',
        method: 'post',
        data:user,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        response => {
            result = response.data
        },
        error => {
            result = error;
        },
    )
    return result

}
// 回复
export async function getComment(user) {
    let result = ''
    await request({
        url: '/forum/comment',
        method: 'post',
        data:user,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        response => {
            result = response.data
        },
        error => {
            result = error;
        },
    )
    return result

}
// isShow
export async function getisShow(user) {
    let result = ''
    await request({
        url: '/forum/reply',
        method: 'post',
        data:user,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        response => {
            result = response.data
        },
        error => {
            result = error;
        },
    )
    return result

}
// 反馈意见
export async function getCheckIdea(user) {
    let result = ''
    await request({
        url: '/home/check',
        method: 'post',
        data:user,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        response => {
            result = response.data
        },
        error => {
            result = error;
        },
    )
    return result

}