// pages/Home/home.js
import {
  instance
} from "../../utils/http.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImages: [],
    course:[],
    videos:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperImage();
    this.getCourseData();
    this.getVideosData();
  },
  // 页面加载时，获取轮播图数据
  async getSwiperImage() {
    let res = await instance({
      url: 'home/swipers',
    })
    if (res.data.status === 0) {
      this.setData({
        swiperImages: res.data.message
      });
    }
  },
  // 获取推荐课程
  async getCourseData() {
    const res = await instance({
      url: 'home/course'
    })
    this.setData({
      course: res.data.message
    })
  },

  // 获取首页热门视屏
  async getVideosData() {
    const res = await instance({
      url: 'home/video'
    })
    this.setData({
      videos: res.data.message
    })
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