// components/course_list/course_list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    courses: Array
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
    // 图片预览
    previewImage(e) {
      wx.previewImage({
        current: e.target.dataset.img, // 当前显示图片的http链接
        urls: this.data.courses.map(item=>item.icon) // 需要预览的图片http链接列表
      })
    }
  }
})