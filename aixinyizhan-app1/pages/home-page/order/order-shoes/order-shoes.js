Page({
  data: {
    items: [
      { name: 'women', value: '女' },
      { name: 'men', value: '男', checked: 'true' },
      { name: 'children', value: '儿童' }
    ],

    item1: [
      { name: 'size', value: '38.5~40' },
      { name: 'size', value: '40.5~42', checked: 'true' },
      { name: 'size', value: '42.5~44' },
      { name: 'size', value: '44.5~46' },
      { name: 'size', value: '47~47.5' },
    ],
    item2: [
      { name: 'size', value: '35~36.5' },
      { name: 'size', value: '37.5~38.5', checked: 'true' },
      { name: 'size', value: '39~40.5' },
      { name: 'size', value: '41~42.5' },
      { name: 'size', value: '43~45' },
    ],
    item3: [
      { name: 'size', value: '25~26.5' },
      { name: 'size', value: '27~28.5', checked: 'true' },
      { name: 'size', value: '29.5~31.5' },
      { name: 'size', value: '32~34' },
      { name: 'size', value: '35~36.5' },
    ],
    toast1Hidden: true,
    modalHidden: true,
    modalHidden2: true,
    notice_str: '',
    index: 0,
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