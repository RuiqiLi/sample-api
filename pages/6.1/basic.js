// pages/6.1/basic.js
Page({
  getSystemInfo() {
    // 同步版本，系统信息随返回值直接返回，异常处理需要使用try catch语法
    try {
      const res = wx.getSystemInfoSync()
      console.log("wx.getSystemInfoSync success, res:", res)
    } catch (e) {
      console.error("wx.getSystemInfoSync failed, error:", e)
    }

    // 异步版本，系统信息在success回调中返回，异常处理在fail回调中进行
    wx.getSystemInfo({
      success(res) {
        console.log("wx.getSystemInfo success, res:", res)
      },
      fail(e) {
        // 接口调用失败的回调函数
        console.error("wx.getSystemInfo failed, error:", e)
      },
      complete() {
        // 接口调用结束的回调函数（调用成功、失败都会执行）
        console.log("wx.getSystemInfo complete")
      }
    })
  },
  canIUse() {
    console.log("wx.canIUse('openBluetoothAdapter') res:", wx.canIUse('openBluetoothAdapter'))  // 是否支持wx.openBluetoothAdapter接口
    console.log("wx.canIUse('getSystemInfoSync.return.screenWidth') res:", wx.canIUse('getSystemInfoSync.return.screenWidth'))  // 系统信息是否返回screenWidth
    console.log("wx.canIUse('getSystemInfo.success.screenWidth') res:", wx.canIUse('getSystemInfo.success.screenWidth'))  // 系统信息回调是否包含screenWidth
    console.log("wx.canIUse('showToast.object.image') res:", wx.canIUse('showToast.object.image'))  // wx.showToast参数是否支持传入image属性
    console.log("wx.canIUse('onCompassChange.callback.direction') res:", wx.canIUse('onCompassChange.callback.direction'))  // 罗盘回调函数参数是否包含direction
    console.log("wx.canIUse('request.object.method.GET') res:", wx.canIUse('request.object.method.GET'))  // wx.request参数的method属性是否支持GET值
    console.log("wx.canIUse('live-player') res:", wx.canIUse('live-player'))  // 是否支持live-player组件
    console.log("wx.canIUse('text.selectable') res:", wx.canIUse('text.selectable'))  // 是否支持text组件的selectable属性
    console.log("wx.canIUse('button.open-type.contact') res:", wx.canIUse('button.open-type.contact'))  // button组件open-type属性是否支持contact值
  },
  updateManager() {
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate(function (res) {
      console.log("onCheckForUpdate, res:", res)  // 请求完新版本信息的回调
    })
    updateManager.onUpdateReady(function () {
      // 新的版本已经下载好，提示用户是否立即重启小程序应用更新
      /*
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            updateManager.applyUpdate()  // 调用applyUpdate重启并更新小程序
          }
        }
      })
      */
    })
    updateManager.onUpdateFailed(function () {
      console.error("新版本下载失败")
    })
  },
  consolelog() {
    // 控制台日志
    console.debug("console.debug")
    console.log("console.log")
    console.info("console.info")
    console.warn("console.warn")
    console.error("console.error")
    console.group("group")
    console.log("this is the frist console log in group")
    console.warn("this is the second console log in group")
    console.groupEnd()
  },
  enableDebug() {
    wx.setEnableDebug({
      enableDebug: true,
      success(res) {
        console.log('wx.setEnableDebug success, res:', res)
      },
      fail(e) {
        console.error('wx.setEnableDebug failed, error:', e)
      },
      complete() {
        console.log('wx.setEnableDebug complete')
      }
    })
  },
  disableDebug() {
    wx.setEnableDebug({
      enableDebug: false,
      success(res) {
        console.log('wx.setEnableDebug success, res:', res)
      },
      fail(e) {
        console.error('wx.setEnableDebug failed, error:', e)
      },
      complete() {
        console.log('wx.setEnableDebug complete')
      }
    })
  },
  setTimeout() {
    console.log('setTimeout 设置了一个定时器，3 秒后执行里面的函数')
    setTimeout(function () {
      console.log('setTimeout 设定的函数执行了！')
    }, 3000) // 单位：毫秒
  },
  setInterval() {
    if (!this.intervalId) {
      console.log('setInterval 设置了一个定时器，每隔 1 秒执行里面的函数')
      this.intervalId = setInterval(() => {
        console.log('setInterval 设定的函数执行了！')
      }, 1000) // 单位：毫秒
    } else {
      console.warn('已经创建了周期定时器')
    }
  },
  clearInterval() {
    if (this.intervalId) {
      console.log('clearInterval 清理了周期定时器')
      clearInterval(this.intervalId)
      this.intervalId = null
    } else {
      console.warn('当前没有设置周期定时器')
    }
  },
  getSetting() {
    wx.getSetting({
      success(res) {
        // 返回当前授权设置的状况
        console.log(res)
      }
    })
  },
  openSetting() {
    wx.openSetting({
      success(res) {
        // 这里返回的是用户设置的操作结果
        console.log(res)
      }
    })
  }
})
