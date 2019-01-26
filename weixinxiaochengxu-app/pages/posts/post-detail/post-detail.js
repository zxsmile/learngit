var postsData = require('../../../data /posts-data.js')
var app = getApp();
Page({
  data: {
    isPlayingMusic: false,

  },
  onLoad: function(option) {

    var postId = option.id;
    this.data.currentPostId = postId;
    var postData = postsData.postList[postId];
    this.setData({
      postData: postData,
    });
    //var postsCollected={
    // 1:"true",
    //2:"false",
    // 3:"true"
    //...
    // }

    //postsCollected里面是所有的页面的缓存状态
    //获取缓存
    var postsCollected = wx.getStorageSync("posts_ollected")
    //判断postsCollected是否存在
    if (postsCollected) {
      //postCollected读取当前页面的缓存状态
      var postCollected = postsCollected[postId];
      //把这个页面是不是被收藏的状态绑定到collected变量中，从而在前端可以读取到它，控制它的显隐状态
      this.setData({
        collected: postCollected
      })
    } else {
      var postsCollected = {};
      postsCollected[postId] = false;
      //将postsCollected对象放到缓存中去
      wx.setStorageSync('posts_collected', postsCollected);
    }
    if (app.globalData.g_isPlayingMusic && app.globalData.g_currentMusicPostId === postId) {
      this.setData({
        isPlayingMusic: true,
      })
    }
    var that = this;
    //监听
    wx.onBackgroundAudioPlay(function() {
      that.setData({
        isPlayingMusic: true,
      })
      app.globalData.g_isPlayingMusic = true;
      app.globalData.g_currentMusicPostId = that.data.currentPostId;
    });

    wx.onBackgroundAudioPause(function() {
      that.setData({
        isPlayingMusic: false,
      })
      app.globalData.g_isPlayingMusic = false;
      app.globalData.g_currentMusicPostId = null;
    });
    wx.onBackgroundAudioStop(function () {
      that.setData({
        isPlayingMusic: false,
      })
      app.globalData.g_isPlayingMusic = false;
      app.globalData.g_currentMusicPostId = null;
    });



  },

  //用户点击时的相关代码
  onColletionTap: function(event) {
    //获取所有缓存看是否被收藏
    //var postsCollected = wx.getStorageSync('posts_collected');
    //拿到当前页面的缓存看是否被收藏     //借助data获取postId
    //var postCollected = postsCollected[this.data.currentPostId];
    //收藏变成未收藏，未收藏变成收藏
    //postCollected = !postCollected;
    //更新缓存
    // postsCollected[this.data.currentPostId] = postCollected;
    //this.showToast(postsCollected, postCollected);
    //异步调用
    //this.getPostsCollectedAsy();
    //同步调用
    this.getPostsCollectedSyc();
  },

  //异步方法
  getPostsCollectedAsy: function() {
    var that = this;
    var postsCollected = wx.getStorage({
      key: 'posts_collected',
      success: function(res) {
        var postsCollected = res.data;
        var postCollected = postsCollected[that.data.currentPostId];
        //收藏变成未收藏，未收藏变成收藏
        postCollected = !postCollected;
        //更新缓存
        postsCollected[that.data.currentPostId] = postCollected;
        that.showToast(postsCollected, postCollected);

      },
    })

  },

  //同步方法
  getPostsCollectedSyc: function() {
    //获取所有缓存看是否被收藏
    var postsCollected = wx.getStorageSync('posts_collected');
    //拿到当前页面的缓存看是否被收藏     //借助data获取postId
    var postCollected = postsCollected[this.data.currentPostId];
    //收藏变成未收藏，未收藏变成收藏
    postCollected = !postCollected;
    //更新缓存
    postsCollected[this.data.currentPostId] = postCollected;
    this.showToast(postsCollected, postCollected);
  },
  
  showModal: function(postsCollected, postCollected) {
    var that = this;
    wx.showModal({
      title: '收藏',
      content: postCollected ? '收藏该文章？' : '取消收藏该文章？',
      showCancel: "true",
      cancelText: "取消",
      cancelColor: "#333",
      confirmText: "确认",
      confirmColor: "#405f80",
      success: function(res) {
        if (res.confirm) {
          //更新文章是否收藏的缓存值
          wx.setStorageSync('posts_collected', postsCollected);
          //更新数据绑定变量，从而实现切换图片
          that.setData({
            collected: postCollected,
          })
        }

      }
    })
  },
 
  showToast: function(postsCollected, postCollected) {
    //更新文章是否收藏的缓存值
    wx.setStorageSync('posts_collected', postsCollected);
    //更新数据绑定变量，从而实现切换图片
    this.setData({
      collected: postCollected,
    })
    wx.showToast({
      title: postCollected ? "收藏成功" : "取消成功",
      duration: 1000,
      icon: "success",
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

  onMusicTap: function(event) {
    var isPlayingMusic = this.data.isPlayingMusic;
    if (isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      })
    } else {
      wx.playBackgroundAudio({
        dataUrl: postsData.postList[this.data.currentPostId].music.url,
        title: postsData.postList[this.data.currentPostId].music.title,
      })
      this.setData({
        isPlayingMusic: true
      })
    }
  }



})