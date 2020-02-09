// pages/Phone_login/phone_login.js
// 导入网络接口
import {
  instance
} from "../../utils/http.js";
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    phone: '17704051019',
    vcode: '',
    showVcode: '获取验证码',
    // 验证码倒计时
    vcodeTime: 10,
    // 验证码计时器
    timer: null,
    // 是否在进行计时
    isTimer:false
  },
  // 输入框改变时，同时改变data中的值
  // changeValue(e){
  //   console.log(e);
  //   this.setData({
  //     phone:e.detail.value
  //   })
  // },

  changeValue(e) {
    // 属性名表达式，就可以让我们的属性名是动态的
    this.setData({
      [e.target.dataset.name]: e.detail.value
    })
  },
  // 获取验证码
  async getVcode() {
    if (this.data.showVcode != "获取验证码") return;

    this.data.timer = setInterval(() => {
      this.setData({
        isTimer:true
      })
      this.data.vcodeTime -= 1;
      this.setData({
        showVcode: this.data.vcodeTime + "s后获取"
      })
      if (this.data.vcodeTime === 0) {
        clearInterval(this.data.timer)
        this.setData({
          isTimer:false,
          showVcode: "获取验证码",
          vcodeTime:10
        })
      }
    }, 1000)

    // 发送请求
    let res = await instance({
      url: 'user/vcode',
      data: {
        phone: this.data.phone
      }
    })
    if (res.data.status == 0) {
      wx.showToast({
        icon: 'none',
        duration: 1000,
        title: `${res.data.vcode}`,
      })
    }
  },
  // 手机登录
  async phoneLogin() {
    wx.showLoading({
      title: '登陆中...',
    })
    let res = await instance({
      url: 'user/login',
      method: 'POST',
      isLogin: true,
      data: {
        phone: this.data.phone,
        vcode: this.data.vcode
      }
    })
    if (res.data.status === 0) {
      // 提示登录成功
      wx.showToast({
        icon: 'none',
        duration: 1000,
        title: res.data.message,
      })
      // 登陆成功，把token保存到本地
      wx.setStorageSync('my_token', res.data.token)
      // 登陆成功，把token保存到全局变量
      app.globalData.my_token = res.data.token;
      // 跳转到首页
      wx.reLaunch({
        url: '/pages/Home/home',
      })
    }
    // wx.request({
    //   url: 'http://localhost:3000/api/user/login',
    //   method: 'POST',
    //   data: {
    //     phone: this.data.phone,
    //     vcode: this.data.vcode
    //   },
    //   success: res => {
    //     // console.log(res)
    //     if (res.data.status === 0) {
    //       // 提示登录成功
    //       wx.showToast({
    //         icon: 'none',
    //         duration: 1000,
    //         title: res.data.message,
    //       })
    //       // 登陆成功，把token保存到本地
    //       wx.setStorageSync('my_token', res.data.token)
    //       // 登陆成功，把token保存到全局变量
    //       app.globalData.my_token = res.data.token;
    //       // 跳转到首页
    //       wx.reLaunch({
    //         url: '/pages/Home/home',
    //       })
    //     }
    //   },
    //   complete: () => {
    //     wx.hideLoading()
    //   }
    // })
  },
  // s
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearInterval(this.data.timer)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})