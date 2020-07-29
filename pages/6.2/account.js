// pages/6.2/account.js
Page({
  login() {
    wx.login({
      success (res) {
        if (res.code) {
          console.log('登录成功！res:', res)
        } else {
          console.log('登录失败！error msg:' + res.errMsg)
        }
      }
    })
  },
  checkSession() {
    wx.checkSession({
      success (res) {
        console.log('session 未过期，res: ', res)
        console.info('提示：在微信开发者工具的工具栏中选择「清缓存」-「清除登录状态」，令 session 强制过期，然后再点击「checkSession」按钮试试看吧！')
      },
      fail (e) {
        console.warn('session 已过期，error:', e)
        console.info('提示：点击「login」按钮登录，然后再点击 「checkSession」 按钮试试看吧！')
      }
    })
  },
  getUserInfo() {
    wx.getUserInfo({
      withCredentials: false, // 是否返回加密信息，非必填，默认为false
      lang: 'zh_CN', // 显示用户信息的语言，非必填，可选值为en、zh_CN、zh_TW，默认为en
      success: function(res) {
        console.log('wx.getUserInfo success, res:', res)
        console.info('提示：在微信开发者工具的工具栏中选择「清缓存」-「清除授权数据」，然后再点击「getUserInfo」按钮，可以观察用户没有授权个人信息时的 API 调用情况。')
      },
      fail: function(e) {
        console.error('wx.getUserInfo failed, error:',e)
        console.info('提示：使用这个接口前，需要首先引导用户点击「open-type="getUserInfo"」的「button」组件授权个人信息。如果用户没有通过 button 组件授权过个人信息，这个接口是不能正常使用的！可以尝试点击下面的按钮授权个人信息，然后再点击「getUserInfo」按钮。')
      }
    })
  },
  getAccountInfoSync() {
    const accountInfo = wx.getAccountInfoSync()
    console.log('wx.getAccountInfoSync success, accountInfo:', accountInfo)
  }
})
