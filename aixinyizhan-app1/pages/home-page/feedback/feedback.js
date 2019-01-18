Page({
  data: {
    toast1Hidden: true,
    modalHidden: true,
    modalHidden2: true,
    notice_str: '',
    evaContent:'',
    aveContent:''
  },
  
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },

  toast1Change: function (e) {
    this.setData({ toast1Hidden: true });
  },
  //弹出确认框
  modalTap: function (e) {
    this.setData({
      modalHidden: false
    })
  },
  confirm_one: function (e) {
    console.log(e);
    this.setData({
      modalHidden: true,
      toast1Hidden: false,
      notice_str: '提交成功'
    });
  },
  cancel_one: function (e) {
    console.log(e);
    this.setData({
      modalHidden: true,
      toast1Hidden: false,

      notice_str: '取消成功'
    });
  },
  //弹出提示框
  modalTap2: function (e) {
    this.setData({
      modalHidden2: false
    })
  },
  modalChange2: function (e) {
    this.setData({
      modalHidden2: true
    })
  },
 
  formSubmit: function (e) {
   
    /*var formData = e.detail.value;
   var that = this;
    wx.request({
      url: '',
      data: formData,
      header: {
        'Content-Type': 'application/json'
      },*/
    //success: function (res) {
    //console.log(res.data)
    this.modalTap();
    //}
    // })
  },
  formReset: function () {
    console.log('form发生了reset事件');
    this.modalTap2();
  }

})
