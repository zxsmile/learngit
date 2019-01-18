var app = getApp();
var juanzhuData = require('../../data/juanzhu1.js')
Page({


  data: {
    juanzhuData_key: {}
  },


  onLoad: function (options) {
    this.setData({
      juanzhuData_key: juanzhuData.juanzhu
    });

  },


  oncatchTap: function (event) {
    var juanzhuId = event.currentTarget.dataset.juanzhuid;

    wx.navigateTo({
      url: app.url1[juanzhuId],

    })

  }

})
