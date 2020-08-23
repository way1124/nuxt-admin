const userApi = {
  Login: '/auth/login',
  Logout: '/auth/logout',
  ForgePassword: '/auth/forge-password',
  Register: '/auth/register',
  twoStepCode: '/auth/2step-code',
  SendSms: '/account/sms',
  SendSmsErr: '/account/sms_err',
  // get my info
  UserInfo: '/user/info',
  UserMenu: '/user/nav'
}

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function login(parameter) {
  return $nuxt.$service({
    url: userApi.Login,
    method: 'post',
    data: parameter
  })
}

export function getSmsCaptcha(parameter) {
  return $nuxt.$service({
    url: userApi.SendSms,
    method: 'post',
    data: parameter
  })
}

export function getInfo() {
  return $nuxt.$service({
    url: userApi.UserInfo,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function getCurrentUserNav() {
  return $nuxt.$service({
    url: userApi.UserMenu,
    method: 'get'
  })
}

export function logout() {
  return $nuxt.$service({
    url: userApi.Logout,
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * get user 2step code open?
 * @param parameter {*}
 */
export function get2step(parameter) {
  return $nuxt.$service({
    url: userApi.twoStepCode,
    method: 'post',
    data: parameter
  })
}
