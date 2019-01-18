var app = getApp();
var orderPageData = require('../../../data/order-data.js')
Page({

 
  data: {
    orderPageData_key:{}
  },

  
  onLoad: function (options) {
    this.setData({
      orderPageData_key: orderPageData.orderPage,
         });
   
  },


  oncatchTap:function(event){
    var orderId = event.currentTarget.dataset.orderid;
     
    wx.navigateTo({
      url: app.url1[orderId],
       
    })
    
  }

 })
