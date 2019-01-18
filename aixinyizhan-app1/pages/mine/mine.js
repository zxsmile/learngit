

 /* onload:function(){
    if(app.gloabalData.userInfo){
      this.setData({
        userInfo:app.globalData.userInfo,
        hasUserInfo:true
      })
    }else if(this.data.canIUse){
      app.userInfoReadyCallback = res =>{
        this.setData({
          userInfo:res.userInfo,
          hasUserInfo:true
        })
      }
    }else{
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setDate({
            userInfo:res.userInfo,
            hasUseerInfo:true
          })
        }
      })
    }
  },
  getUserInfo:function(e){
    console.log(e)
    app.globalData.userInfo=e.detail.userInfo
    this.setData({
      userInfo:e.detail.userInfo,
      hasUserInfo:true
    })
  }*/
    

 /* var _this = this;
  if(!app.globalData.authType.userInfo) {
    app.validateAuthorize('userInfo', function () {
      app.wxCheckLogin(function () {
        _this.onLoad();
        _this.onShow();
      });
    });
  } else {
    app.wxCheckLogin(function () {
      _this.onLoad();
      _this.onShow();
    });
  }*/

  var app = getApp();
  Page({
  
    /**
     * 页面的初始数据
     */
    data: {
    
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      
    },
  
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      
    },
  
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      
    },
  
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
      
    },
  
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
      
    },
  
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
      
    },
  
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
      
    },
  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
      
    }
    
  })
  
  


  
  
