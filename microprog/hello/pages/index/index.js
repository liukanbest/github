//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    bad_man_num : 0,
    good_man_num: 0,
    bad_man_words: null,
    good_man_words: null
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },



  // begin sasukeliu
  badManNumbInput: function(e){
    this.setData(
      {
        bad_man_num:e.detail.value
      }
    )
  },
  goodManNumbInput: function (e) {
    this.setData(
      {
        good_man_num: e.detail.value
      }
    )
  },
  badManWordsInput: function (e) {
    this.setData(
      {
        bad_man_words: e.detail.value
      }
    )
  },
  goodManWordsInput: function (e) {
    this.setData(
      {
        good_man_words: e.detail.value
      }
    )
  },



  startNewBattle: function (e) {
    console.log("鬼,人数：" + this.data.bad_man_num + "词语：" + this.data.bad_man_words);
    console.log("人,人数：" + this.data.good_man_num + "词语：" + this.data.good_man_words);
  },

  // end sasukeliu
  
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
