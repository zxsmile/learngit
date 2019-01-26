function convertToStarsArray(stars) {
  var num = stars.toString().substring(0, 1);
  var array = [];
  for (var i = 1; i <= 5; i++) {
    if (i <= num) {
      array.push(1);
    } else {
      array.push(0);
    }
  }
  return array;
}

function http(url, callBack) {

  wx.request({
    url: url,
    method: 'GET',
    header: {
      "Content-Type": ""
    },
    success: function(res) {
      callBack(res.data);
    },
    fail: function(error) {
      console.log(error);
    },

  })
}


function convertToCastString(actorList) {
  var actorsjoin = "";
  for (var idx in actorList) {
    actorsjoin = actorsjoin + actorList[idx].actor+ "/";
  }
  return actorsjoin.substring(0, actorsjoin.length - 2);
}


function convertToCastInfos(actorList){
  var actorsArray = [];
  for (var idx in actorList){
    var actor={
      img: actorList[idx].actorImg ? actorList[idx].actorImg : "",
      name: actorList[idx].actor,
    }
    actorsArray.push(actor);
  }
  return actorsArray;
}

module.exports = {
  convertToStarsArray: convertToStarsArray,
  http: http,
  convertToCastString: convertToCastString,
  convertToCastInfos: convertToCastInfos
};