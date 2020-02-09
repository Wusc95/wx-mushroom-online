//app.js
App({
  onLaunch: function () {
    // 从本地取出token
    const my_token = wx.getStorageSync('my_token');
    // 判断token是否存在，如果存在直接跳转到首页
    if (my_token) {
      wx.reLaunch({
        url: '/pages/Home/home',
      })
    }
  },
  globalData: {
    userInfo: null,
    my_token:null
  }
})