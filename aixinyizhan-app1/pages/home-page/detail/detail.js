var HomePageDetailData = require('../../../data/home-page-data.js')
Page({
  data: {},
  onLoad: function(options) {
    var HomePageId = options.id;
    this.data.currentPostId = HomePageId;
    var HomePageDetail_key = HomePageDetailData.HomePage[HomePageId];
    this.setData({
      HomePageDetail_key: HomePageDetail_key,
    });
    var homePagesCollected = wx.getStorageSync("homePages_Collected")
    if (homePagesCollected) {
      var homePageCollected = homePagesCollected[HomePageId];
      this.setData({
        collected: homePageCollected
      })
    } else {
      var homePagesCollected = {};
      homePagesCollected[HomePageId] = false;
      wx.setStorageSync("homePages_Collected", homePagesCollected)
    }
  },

  onColletionTap: function(event) {
    var homePagesCollected = wx.getStorageSync("homePages_Collected");
    var homePageCollected = homePagesCollected[this.data.currentPostId];
    homePageCollected = !homePageCollected;
    homePagesCollected[this.data.currentPostId] = homePageCollected;
    wx.setStorageSync("homePages_Collected", homePagesCollected);
    this.setData({
      collected: homePageCollected
    })
    wx.showToast({
      title: homePageCollected ? "收藏成功" : "取消成功",
      duration: 1000,
      icon: "success"
    })
  },
  onShareTap: function(event) {
    var itemList = [
      "分享给微信好友",
      "分享到朋友圈",
      "分享到QQ",
      "分享到微博",
    ]
    wx.showActionSheet({
      itemList: itemList,
      itemColor: "#405f80",
      success: function(res) {
        //res.calcel 用户是不是点击了取消按钮
        //res.tapIndex 数组元素的序号，从零开始
        wx.showModal({
          title: '用户' + itemList[res.tapIndex],
          content: '用户是否取消？' + res.canel + "现在无法实现分享功能",
        })
      }
    })
  },
})