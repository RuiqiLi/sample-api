// pages/6.3/route.js
Page({
  navigateTo() {
    wx.navigateTo({
      url: '/pages/6.3/new_page'
    })
  },
  navigateBack() {
    wx.navigateBack()
  },
  redirectTo() {
    wx.redirectTo({
      url: '/pages/6.3/new_page'
    })
  },
  reLaunch() {
    wx.reLaunch({
      url: '/pages/6.3/new_page'
    })
  },
  navigateToMiniProgram() {
    wx.navigateToMiniProgram({
      appId: 'wx6e0a9b37fe240c37',
    })
  }
})