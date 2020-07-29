// pages/6.5/surface.js
Page({
  setNavBarTitle() {
    wx.setNavigationBarTitle({
      title: '页面标题改变啦'
    })
  },
  setNavBarColor() {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ff0000',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  },
  menuButton() {
    const res = wx.getMenuButtonBoundingClientRect()
    console.log('res:', res)
  }
})