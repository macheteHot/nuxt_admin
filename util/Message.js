import { Message } from 'element-ui'

export const SuccessMessage = (msg, time = 3) => {
  if(!msg) return null
  Message({
    message: msg,
    type: 'success',
    showClose: true,
    duration: ~~time * 1000
  })
}
export const warningMessage = (msg, time = 3) => {
  if(!msg) return null
  Message({
    message: msg,
    type: 'warning',
    showClose: true,
    duration: ~~time * 1000
  })
}
export const ErrorMessage = (msg, time = 3) => {
  if(!msg) return null
  Message({
    message: msg,
    type: 'error',
    showClose: true,
    duration: ~~time * 1000
  })
}