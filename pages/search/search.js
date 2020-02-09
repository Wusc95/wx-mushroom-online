// pages/search/search.js
import { instance } from "../../utils/http.js";
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    courses:[]
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  confirm: async function(e){
    let res = await instance({
      url:'course/search',
      data:{
        name:e.detail.value
      }
    })
    if(res.data.status === 0){
      this.setData({
        courses:res.data.message
      })
    }
  }
})