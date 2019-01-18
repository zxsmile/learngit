var app = getApp();
var HomePageData = require('../../data/home-page-data.js')
Page({


  data: {
    HomePageData_key: {}
  },


  onLoad: function (options) {
    this.setData({
      HomePageData_key: HomePageData.HomePage
    })

  },


  oncatchTap: function (event) {
    var HomePageId = event.currentTarget.dataset.HomePageid;

    wx.navigateTo({
      url: app.url1[HomePageId],

    })

  }

})