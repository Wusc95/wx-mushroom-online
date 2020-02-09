// components/search_bar/search_bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tips:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goSearch(){
      wx.navigateTo({
        url: '/pages/search/search',
      })
    }
  }
})
