// components/circle/circle.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    progress: Number,
    canvasId: Number,
    width: {
      type: Number,
      value: 100
    },
    lineWidth: {
      type: Number,
      value: 5
    },
    height: {
      type: Number,
      value: 100
    },
    backgroundColor: {
      type: String,
      value: '#f3f3f3'
    },
    foreBackground: {
      type: String,
      value: '#ff0000'
    }
  },

  ready() {
    this.drawStudyProgress()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    drawStudyProgress() {
      // 先拿到canvas画布上下文，如果在组件中，必须写上第二个参数this，否则拿不到画布上下文
      const backgroundCanvasCtx = wx.createCanvasContext('backgroundCanvas' + this.data.canvasId, this)
      // 判断颜色
      if (this.data.progress >= 60) {
        this.data.foreBackground = '#43cb7d';
      } else if (this.data.progress >= 30) {
        this.data.foreBackground = '#ff9348';
      } else if (this.data.progress < 30) {
        this.data.foreBackground = '#ff0000'
      }
      console.log(this.data.foreBackground)
      // 绘制背景的圆
      // 设置绘制的颜色
      backgroundCanvasCtx.strokeStyle = this.data.backgroundColor
      // 开启路径
      backgroundCanvasCtx.beginPath()
      // 设置线宽
      backgroundCanvasCtx.lineWidth = this.data.lineWidth
      // 绘制圆
      backgroundCanvasCtx.arc(this.data.width / 2, this.data.height / 2, this.data.width / 2 - this.data.lineWidth, 0, 2 * Math.PI, false)
      // 绘制
      backgroundCanvasCtx.stroke()
      // draw

      // 绘制进度
      backgroundCanvasCtx.beginPath();
      backgroundCanvasCtx.lineWidth = this.data.lineWidth;
      backgroundCanvasCtx.strokeStyle = this.data.foreBackground;
      backgroundCanvasCtx.arc(this.data.width / 2, this.data.height / 2, this.data.width / 2 - this.data.lineWidth, -0.5 * Math.PI, (this.data.progress * 0.01) * 1.5 * Math.PI, false)
      backgroundCanvasCtx.stroke();

      // 绘制进度文字
      backgroundCanvasCtx.beginPath();
      backgroundCanvasCtx.setFillStyle(this.data.foreBackground);
      const font_size = 12;
      backgroundCanvasCtx.font = font_size + 'px Helvetica'
      // // 获取文字的宽度
      // const text_width = foregroundCtx.measureText(parseInt(this.data.progress)+'%').width
      // foregroundCtx.fillText(parseInt(this.data.progress)+'%',this.data.width / 2 - text_width / 2,this.data.height / 2 + font_size / 2)
      if (this.data.progress >= 99) {
        backgroundCanvasCtx.fillText(parseInt(this.data.progress) + '%', this.data.width / 2 - 13, this.data.height / 2 + 6)
      } else {
        backgroundCanvasCtx.fillText(parseInt(this.data.progress) + '%', this.data.width / 2 - 10, this.data.height / 2 + 6)
      }

      backgroundCanvasCtx.draw();
    }
  }
})