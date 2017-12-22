const app = getApp()
var util = require('../../utils/util.js');
// 创建页面实例对象
Page({
  data: {
    orderTime: '',
    orderNumber: '',
    orderResName: '武汉理工大学莘子院',
    chooseGoods: {},
    menuList: [{
      id: 'list1',
      list: [{
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '红烧牛肉',
        count: '1805',
        good: '173',
        price: '23.5',
        id: 'list1_1'
      }, {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '红烧鸡肉',
        count: '1805',
        good: '173',
        price: '23.5',
        id: 'list1_2'
      }, {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '红烧肉',
        count: '1805',
        good: '173',
        price: '23.5',
        id: 'list1_3'
      }, {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '红焖羊肉',
        count: '1805',
        good: '173',
        price: '23.5',
        id: 'list1_4'
      }]
    }, {
      id: 'list2',
      list: [{
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '土豆丝',
        count: '1805',
        good: '173',
        price: '23.5',
        id: 'list2_1'
      }, {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '羊肉面',
        count: '1805',
        good: '173',
        price: '23.5',
        id: 'list2_2'
      }, {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '麻婆豆腐',
        count: '1805',
        good: '173',
        price: '23.5',
        id: 'list2_3'
      }, {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '鱼香肉丝',
        count: '1805',
        good: '173',
        price: '23.5',
        id: 'list2_4'
      }]
    }, {

      id: 'list3',
      list: [{
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '凉拌黄瓜',
        count: '1805',
        good: '173',
        price: '23.5'
      }, {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '醋溜土豆丝',
        count: '1805',
        good: '173',
        price: '23.5'
      }, {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '香辣花生米',
        count: '1805',
        good: '173',
        price: '23.5'
      }, {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '小葱拌豆腐',
        count: '1805',
        good: '173',
        price: '23.5'
      }]
    }, {
      id: 'list4',
      list: [{
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '红烧牛肉套餐',
        count: '1805',
        good: '173',
        price: '23.5'
      }, {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '红烧羊肉套餐',
        count: '1805',
        good: '173',
        price: '23.5'
      }, {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '黄焖鸡套餐',
        count: '1805',
        good: '173',
        price: '23.5'
      }, {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '土豆牛肉套餐',
        count: '1805',
        good: '173',
        price: '23.5'
      }]
    }, {
      id: 'list5',
      list: [{
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '可乐',
        count: '1805',
        good: '173',
        price: '23.5'
      }, {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '雪碧',
        count: '1805',
        good: '173',
        price: '23.5'
      }, {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '七夕',
        count: '1805',
        good: '173',
        price: '23.5'
      }, {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '豆浆',
        count: '1805',
        good: '173',
        price: '23.5'
      }]
    }, {
      id: 'list6',
      list: [{
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '红烧牛肉1',
        count: '1805',
        good: '173',
        price: '23.5'
      }, {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '红烧牛肉2',
        count: '1805',
        good: '173',
        price: '23.5'
      }, {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '红烧牛肉3',
        count: '1805',
        good: '173',
        price: '23.5'
      }, {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '红烧牛肉4',
        count: '1805',
        good: '173',
        price: '23.5'
      }]
    }],

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
  goCheckPay: function goCheckOrder(e) {
    if (this.data.index <= 0) {
      return wx.showToast({
        title: '请选择桌号',
        icon: 'success',
        mask: true
      });
    }
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