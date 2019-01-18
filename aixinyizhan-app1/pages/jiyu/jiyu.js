var app = getApp();
var HomePageData = require('../../data/home-page-data.js')
Page({


  data: {
    HomePageData_key: {},
    aveContent: ''
  },


  onLoad: function (options) {
    this.setData({
      HomePageData_key: HomePageData.HomePage
    })

  },
})