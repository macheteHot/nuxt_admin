import axios from 'axios'
import Qs from 'qs'
import { ErrorMessage, SuccessMessage, warningMessage } from '@/util/Message';
const ERROR_MSG = {
  400: '服务不可达',
  404: '请求错误,服务器无资源',
  500: '服务器错误',
  501: '网络未实现',
  502: '网络错误',
  503: '服务不可用',
  504: '网络超时',
  505: 'http版本不支持该请求'
}
const service = axios.create({
  baseURL:process.env.config.apiURL,
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 10 * 1000 // request timeout set  is 10s
})

// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)


service.interceptors.response.use(
  response => {
    const res = response.data
    switch (res.code) {
      case 200:
        SuccessMessage(res.msg)
        break
      case 500:
        warningMessage(res.msg)
        break
      case 401:
        ErrorMessage(res.msg) // why not auth
        /**
         * loginOut function
         */
        break
    }
    return res
  },
  error => {
    console.error('err' + error) // for debug
    if(OBject.keys(ERROR_MSG).includes(error.response.status)){
      ErrorMessage(ERROR_MSG[error.response.status])
    }else{
      ErrorMessage('未知错误!')
    }
    return Promise.reject(error)
  }
)

function get (url, params) {
  return new Promise((resolve, reject) => {
    service.get(url, params).then(res => {
      resolve(res.data)
    }).catch(err => {b
      reject(err.data)
    })
  })
}

/**
 * post methods
 * @param {String} url
 * @param {Object} params
 * only return data ignore msg and code
 */
function post (url, params) {
  return new Promise((resolve, reject) => {
    service.post(url, params).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

function cApi (url, methods = 'p') {
  switch (methods) {
    case 'g':
      return p => get(url, p)
    case 'p':
      return p => post(url, p)
    case 'f': // form formatted
      return p => post(url, Qs.stringify(p))
  }
}
export default cApi