// pages/movies/more-movie/more-movie.js
var app = getApp()
var util = require("../../../utils/util.js")
Page({
  data: {
    movies: {},
    navigationBarTitle: "",
    requstUrl: "",
    totalCount: 0,
    isEmpety: true,
  },
  onLoad: function(options) {

    var category = options.category;
    this.data.navigationBarTitle = category;
    var dataUrl = '';
    switch (category) {
      case "正在热映":
        dataUrl = app.globalData.doubanBase + "/PageSubArea/HotPlayMovies.api";
        break;
      case "即将上映":
        dataUrl = app.globalData.doubanBase + "/PageSubArea/HotPlayMovies.api";
        break;
      case "豆瓣TOP250":
        dataUrl = app.globalData.doubanBase + "/PageSubArea/HotPlayMovies.api";
        break;
    }
    this.data.requestUrl = dataUrl;
    util.http(dataUrl, this.processDoubanData)
  },

  //onScrollLower: function(event) {
   // var nextUrl = this.data.requestUrl +
     // "?start=" + this.data.totalCount + "&count=15";
    //util.http(nextUrl, this.processDoubanData)
    //wx.showNavigationBarLoading()
  //},
   onReachBottom:function(event) {
      var nextUrl = this.data.requestUrl +
      "?start=" + this.data.totalCount + "&count=15";
      util.http(nextUrl, this.processDoubanData)
     wx.showNavigationBarLoading()
     },
  onPullDownRefresh: function(event) {
    var refreshUrl = this.data.requestUrl + "?start=0&count=15";
    this.data.movies = {};
    this.data.isEmpety = true;
    this.data.totalCount = 0;
    util.http(refreshUrl, this.processDoubanData);
    wx.showNavigationBarLoading()
  },

  processDoubanData: function(moviesDouban) {
    var movies = [];
    for (var idx in moviesDouban.movies) {
      var subject = moviesDouban.movies[idx];
      var title = subject.titleCn;
      if (title.length >= 6) {
        title = title.substring(0, 6) + "...";
      }
      var temp = {
        //stars: util.convertToStarsArray(movie_data.movies[star]),
        title: title,
        average: subject.ratingFinal,
        coverageUrl: subject.img,
        movieId: subject.movieId
      }
      movies.push(temp)
    }
    var totalMovies = {}
    //如果要绑定新加载的数据，那么需要同旧有的数据合并在一起
    if (!this.data.isEmpety) {
      totalMovies = this.data.movies.concat(movies);
    } else {
      totalMovies = movies;
      this.data.isEmpety = false;
    }
    this.setData({
      movies: totalMovies
    });
    this.data.totalCount += 15;
    wx.hideNavigationBarLoading();
    wx.stopPullDownRefresh();
  },

  onReady: function(event) {
    wx.setNavigationBarTitle({
      title: this.data.navigationBarTitle,
    })
  },
  onMovieTap: function(event) {
    var movieId= event.currentTarget.dataset.movieid;
    wx.navigateTo({
      url: '../movie-detail/movie-detail?id=' + movieId,
    })
  },

})