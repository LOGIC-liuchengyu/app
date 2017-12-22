const app = getApp()
var util = require('../../utils/util.js');
// 创建页面实例对象
Page({
  data: {
    orderTime: '',
    orderNumber: '',
    orderResName: '武汉理工大学莘子院',
    chooseGoods: {},
    tables: ["请选择", "01号", "02号", "03号", "04号", "05号", "06号", "07号", "08号", "09号", "10号"], //桌号
    index: 0
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '订单详情'
    });
    let _time = util.formatTime(new Date());
    let _number = util.getOrderNumber(new Date());
    this.setData({
      chooseGoods: wx.getStorageSync('chooseGoods'),
      orderTime: _time,
      orderNumber: _number
    });
  },
  // 下拉选择框
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  /**
   * 支付货款
   */
  payMoney: function payMoney() {
    wx.navigateTo({
      url: '../payResult/payResult'
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {
    // TODO: onReady
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {
    // TODO: onShow
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function onHide() {
    // TODO: onHide
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function onUnload() {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function onPullDownRefresh() {},
});