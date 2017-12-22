'use strict';

//处理逻辑，得到上一个页面传过来的商家数据信息
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'ordering',
    restaurant: {
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      name: '武汉理工大学莘子院',
      id: 'remaid',
      address: '武汉理工大学东院',
      tel: '15926396569',
      status: '正在营业',
      grade: 'four-star',
      gradeNumber: '4.8',
      menuList: [{
        title: '热销',
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
        title: '折扣',
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
        title: '小份菜',
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
        title: '套餐',
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
        title: '饮品',
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
        title: '外卖',
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
      // coupon: {
      //   id: 'code123123',
      //   delmoney: 10,
      //   condition: 100,
      //   time: '2017-12-12'
      // }
    },
    // 当前的tab
    currentmenu: 1,
    currentleftmenu: 0,
    // 侧边栏联动当前值
    currentmenuid: 'list1',

    // 设置scroll-view的高度
    scrollHeight: 880,
    needDistance: 0,
    scrollHeight2: 815,

    //在没有点餐和点餐的情况下购物车的显示样式
    showShopCarContent: false,
    showMask: false,
  },
  /**
   * 确认订单
   */
});
