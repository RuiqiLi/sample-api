// pages/6.4/interaction.js
Page({
  showToast() {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  hideToast() {
    wx.hideToast()
  },
  showLoading() {
    wx.showLoading({
      title: '2 秒后自动关闭',
    })
    // 2秒后关闭消息提示框（通常的做法是在网络请求前显示提示框，然后在complete回调中关闭提示框）
    setTimeout(() => {
      wx.hideLoading()
    }, 2000)
  },
  showModal() {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          wx.showToast({
            title: '点击了确定',
            icon: 'none',
            duration: 2000
          })
        } else if (res.cancel) {
          wx.showToast({
            title: '点击了取消',
            icon: 'none',
            duration: 5000
          })
        }
      }
    })
  },
  showActionSheet() {
    const list = ['A', 'B', 'C']
    wx.showActionSheet({
      itemList: list,
      success(res) {
        wx.showToast({
          title: '点击了第 ' + res.tapIndex + ' 个选项，即选择了：' + list[res.tapIndex],
          icon: 'none',
          duration: 5000
        })
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  pullDownRefresh() {
    wx.startPullDownRefresh()
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 2000);
  },
  navBarLoading() {
    wx.showNavigationBarLoading()
    setTimeout(() => {
      wx.hideNavigationBarLoading()
    }, 2000);
  },
  pageScrollTo() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  }
})