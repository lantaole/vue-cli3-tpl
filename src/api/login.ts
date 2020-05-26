import Api from '@/utils/request'

export const getData = () => {
  return Api.getData()
}

export const mobileCodeLogin = () => {
  return Api.mobileCodeLogin({
    url: 'user/mobileCodeLogin'
  })
}
export const sendVerifyCode = () => {
  return Api.sendVerifyCode({
    url: '/user/sendVerifyCode'
  })
}