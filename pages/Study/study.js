// pages/Study/study.js
import { instance } from "../../utils/http.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studyProgresses:[],
    isEmpty:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getStudyProgresses();
  },
  // 获取学习进度
  async getStudyProgresses(){
    let res = await instance({
      url:'study/progress'
    })
    // console.log(res);
    if(res.data.status === 0){
      this.setData({
        isEmpty:false,
        studyProgresses:res.data.message
      })
    }else{
      wx.showToast({
        icon:'none',
        duration:2000,
        title: '系统出错，请稍后重试...'
      })
    }
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