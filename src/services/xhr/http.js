/**
 * Created by fang on 2017/8/9.
 */
import React from'react'
import {instanceOf} from 'prop-types'
import testData from './../../services/testData.js'

import {CookiesProvider, withCookies, Cookies} from 'react-cookie'
import {
    Link
} from 'react-router-dom'

/* API URL, you need to supply your API key */


let service = {}
let apiService = {}

service.blogTest = true
let getData = function (URL, onSuccess, onError) {
    let headers = new Headers()
    headers.append('Accept', 'application/json')
    let feq = new Request(URL, {method: 'GET', cache: 'reload', headers: headers})

    function fetchDemo() {
        fetch(feq).then(function (response) {
            onSuccess(response.json())
            // return response.json()
        }).then(function (json) {
            console.log("http request failed")
            console.log(json)
            if (json.status == "403") {
                console.log("您还未登录，请先登录！")
                //清楚session 数据和 登录状态cookie， 注意， 这里没有调用 clearAll(). 保留了用户credential的cookie，
                // 当回到login之后, 如果用户当初选择了保持登录状态， 依然可以用其来实现自动登录。
                /*   Session.clearData()
                 Session.clearLoginCookies()*/
                // $state.go('login')
            }
            if (onError) {
                onError(json)
            }
            // insertPhotos(json)
        })
    }

    fetchDemo()
}

apiService.logIn = function (param, onSuccess) {
    if (service.blogTest) {
        testData.getLogInData()
    }
    let processSuccess = function () {
        onSuccess(response.data.data)
    }
    let onError = function () {
        alert('error')
    }
    getData('url', processSuccess, onError)
}

export default apiService

