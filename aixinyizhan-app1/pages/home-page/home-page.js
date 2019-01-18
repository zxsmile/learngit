var HomePageData = require('../../data/home-page-data.js')

Page({

  data: {
     HomePage_key:{}
  },

  onLoad: function (options) {
    this.setData({
      HomePage_key: HomePageData.HomePage
    });
    
  },

  onPostTap:function(event){
    var HomePageId = event.currentTarget.dataset.homepageid;
    
    wx.navigateTo({
      url: 'detail/detail?id=' + HomePageId,
      
    })
  }




})

