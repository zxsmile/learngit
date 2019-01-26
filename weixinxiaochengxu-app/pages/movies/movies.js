//var util = require("../../utils/util.js")
//var movie_data = require("../../data /movies-data.js")
var app = getApp();
Page({
  data: {
    inTheaters: {},
    comingSoon: {},
    sell: {},
    searchResult:{},
    containerShow: true,
    searchPanelShow: false,
  },
  //moviesData: function (options) {

  //var moviesData = movie_data.movies;
  //var stars = util.convertToStarsArray(moviesData[star]);
  //var average = moviesData[average];
  //console.log(stars);
  //this.setData({
  //stars: stars,
  //average: average
  // })
  //},
  onLoad: function(event) {
    var inTheatersUrl = app.globalData.doubanBase + "/PageSubArea/HotPlayMovies.api" + "?start=0&count=3";
    var comingSoonUrl = app.globalData.doubanBase + "/PageSubArea/HotPlayMovies.api" + "?start=0&count=3";
    var sellUrl = app.globalData.doubanBase + "/PageSubArea/HotPlayMovies.api" + "?start=0&count=3";

    this.getMovieListData(inTheatersUrl, "inTheaters", "正在热映");
    this.getMovieListData(comingSoonUrl, "comingSoon", "即将上映");
    this.getMovieListData(sellUrl, "sell", "豆瓣TOP250");
  },

  onMoreTap: function(event) {
    var category = event.currentTarget.dataset.category;
    wx: wx.navigateTo({
      url: 'more-movie/more-movie?category=' + category,
     
    })
},

onMovieTap:function(event){
  var movieId=event.currentTarget.dataset.movieid;
  wx: wx.navigateTo({
    url: 'movie-detail/movie-detail?id=' + movieId,
  })
},

  getMovieListData: function(url, settedKey, categoryTitle) {
    var that = this;
    wx.request({
      url: url,
      method: 'GET',
      header: {
        "Content-Type": "xml"
      },
      success: function(res) {
      
        that.processDoubanData(res.data, settedKey, categoryTitle);

      },
      fail: function(error) {
        console.log(error);
      },

    })
  },

  onCancelImageTap: function() {
    this.setData({
      containerShow: true,
      searchPanelShow: false,
      searchResult: {}
    })
  },


  onBindFocus: function(event) {
    this.setData({
      containerShow: false,
      searchPanelShow: true
    })

  },

  onBindBlur:function(event){
   var text=event.detail.value;
    var searchUrl ="";
  this.getMovieListData(searchUrl,"searchResult","");
  },

  processDoubanData: function(moviesDouban, settedKey, categoryTitle) {
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
        score: subject.ratingFinal,
        coverageUrl: subject.img,
        movieId: subject.movieId

      }
      movies.push(temp)
    }
    var readyData = {};
    readyData[settedKey] = {
      movies: movies,
      categoryTitle: categoryTitle
    }
    this.setData(readyData);
  }
})