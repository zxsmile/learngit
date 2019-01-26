var util = require("../../../utils/util.js");
var app = getApp();
Page({
  data: {
    movie:{}
  },
  onLoad: function(options) {
    var movieId = options.id;
    var url = app.globalData.doubanBase +
      "/movie/detail.api?locationId=270&movieId=" + movieId;
    util.http(url, this.processDoubanData)
  },


 processDoubanData: function(data) {
  //if(!data){
    //return;
  //}
  var director ={
    avatar: "",
    name:"",
    id:""
   }
   console.log(data);
   if (data.director!=null){
   if (data.director.directorImg !=null){
        director.avatar =data.director.directorImg 
}
  director.name = data.director.directorName;
     director.id = data.director.directorId;
  }
  var movie={
    movieImg:data.image ? data.image : "",
    country: data.release.location,
    title: data.titleCn,
    titleEn: data.titleEn,
    wishCount: data.personCount,
    commentCount: data.personCount,
    year: data.release.date,
    generes: data.type.join("、"),
    stars: util.convertToStarsArray(data.scoreCount),
    score: data.rating,
    director: director,
    casts: util.convertToCastString(data.actorList),
    castsInfo: util.convertToCastInfos(data.actorList),
    summary: data.content
}
console.log(movie);
this.setData({
movie:movie
})
 },
 /*查看图片*/
  viewMoviePostImg:function(e){
   var src=e.currentTarget.dataset.src;
   wx.previewImage({
     current:src,//当前显示图片的http链接
     urls: [src],//需要预览的图片http链接列表
   })
 },
})