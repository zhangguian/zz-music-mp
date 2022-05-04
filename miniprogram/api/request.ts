const baseUrl = 'http://yili-music-1479251-1308655658.ap-shanghai.run.tcloudbase.com/'

export const get = (url:string) => {
  wx.showLoading({
    title: '加载中...'
  })

  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      method: 'GET',
      success: (res) => {
        // handleError(res, reject)
        resolve(res.data)
      },
      fail: (err) => {
        reject(err)
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  })
}
 