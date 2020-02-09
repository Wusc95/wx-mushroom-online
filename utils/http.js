// 封装网络请求
// 基地址
const BASEURL = 'http://localhost:3000/api/'
const app = getApp();
export const instance = ({url,data,method="GET",isLogin=false,tips="数据加载中..."})=>{
  // 返回一个promise对象
  return new Promise((resolve,reject)=>{
    wx.showLoading({
      title: tips,
    })
    // 处理请求头
    const header = {};
    if(!isLogin){
      const token = app.globalData.my_token;
      if(token){
        header.Authorization=token;
      }else{
        app.globalData.my_token=wx.getStorageSync('my_token')
        header.Authorization=wx.getStorageSync('my_token')
      }
    }
    // 发送网络请求
    wx.request({
      url: `${BASEURL}${url}`,
      method,
      data,
      header,
      success:res=>{
        resolve(res)
      },
      fail:error=>{
        reject(error)
      },
      complete:()=>{
        setTimeout(function () {
          wx.hideLoading()
        }, 1000)
      }
    })
  })
}

