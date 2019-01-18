Page({
  data: {
    item: [
      { name: 'book', value: '小说' },
      { name: 'book', value: '儿童读物', checked: 'true' },
      { name: 'book', value: '专业书' },
      { name: 'book', value: '工具书' },
      { name: 'book', value: '画册' },
      { name: 'book', value: '盲人书' },
      { name: 'book', value: '期刊' },
    ],
    toast1Hidden: true,
    modalHidden: true,
    modalHidden2: true,
    notice_str: '',
     index: 0  ,
     time:''      

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
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  formSubmit: function (e) {
    /*var that = this;
    var formData = e.detail.value;
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