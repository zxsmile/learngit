var postsData = require('../../data /posts-data.js')

Page({
  data: {},
  onLoad: function(options) {
    this.setData({
      post_key: postsData.postList
    });
  },

  onPostTap: function(event) {
    var postId = event.currentTarget.dataset.postid;
    //console.log("on post id is" +postId);
    wx.navigateTo({
      url: "post-detail/post-detail?id=" + postId,
    });
  },
   
onSwiperTap:function(event){
  //target和currentTarget
  //target指的是当前点击的组件，而currentTarget指的是事件捕获的组件
  //target这里指的是image,而currrentTarget指的是swiper
  var postId = event.target.dataset.postid;
  wx.navigateTo({
    url: "post-detail/post-detail?id=" + postId,
  });

},



})