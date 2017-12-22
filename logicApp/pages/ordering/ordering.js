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


    chooseGoods: {
      // 饭店id
      restaurant_id: 'renmaid',
      // 选择的商品数量
      goods: {},
      // 总金额
      money: 0,
      // 总数
      allCount: 0
    }
  },
  /**
   * 确认订单
   */
  goCheckOrder: function goCheckOrder(e) {
    if (this.data.chooseGoods.allCount <= 0) {
      return wx.showToast({
        title: '您还没有点餐',
        icon: 'success',
        mask: true
      });
    }
    let args = this.data.chooseGoods;
    console.log('-------------测试订单数据----------------');
    console.log(args);
    console.log('-------------测试订单数据----------------');
    wx.navigateTo({
      url: '../payorder/payorder'
    });
  },

  /**
   * 计算消费金额
   */
  calculateMoney: function calculateMoney() {
    var goods = this.data.chooseGoods.goods;
    var menuList = this.data.restaurant.menuList;
    var money = 0;
    var singleMoney = 0;
    for (var goodsId in goods) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = menuList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var lists = _step.value;
          // 具体列表内的菜单
          var list = lists.list;
          // console.log(list)
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var goodsID = _step2.value;

              if (goodsID.id === goodsId) {
                singleMoney = goodsID.price * goods[goodsId];
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      money += singleMoney;
    }
    return money;
  },

  /**
   * 显示购物车内容
   */
  showContent: function showContent() {
    if (this.data.chooseGoods.money <= 0) return;
    this.setData({
      showShopCarContent: !this.data.showShopCarContent,
      showMask: !this.data.showMask
    });
  },


  /**
   * 设置右侧滚动栏的位置
   */
  setNeedDistance: function setNeedDistance() {
    if (!this.data.restaurant.coupon.id) return;
    this.setData({
      needDistance: 142
    });
  },

  /**
   * 改变menu选择
   * @param e
   */
  choose: function choose(e) {
    // console.log(e)
    this.setData({
      currentmenu: e.currentTarget.dataset.tab
    });
  },

  /**
   * 改变left menu选择
   * @param e
   */
  leftChoose: function leftChoose(e) {
    this.setData({
      currentleftmenu: e.currentTarget.dataset.menu,
      currentmenuid: e.currentTarget.dataset.menulistid
    });
  },

  /**
   * 户呼叫服务
   * @param e
   */
  menu1choose: function menu1choose(e) {
    console.log(e.currentTarget.dataset.tabmenu);
  },

  /**
   * 拨打电话
   */
  callPhone: function callPhone() {
    wx.makePhoneCall({
      phoneNumber: this.data.restaurant.tel
    });
  },

  /**
   * 修改标题栏文字
   */
  setNavigatorText: function setNavigatorText() {
    var that = this;
    wx.setNavigationBarTitle({
      title: that.data.restaurant.name
    });
  },

  /**
   * 添加商品
   * @param e
   */
  addorder: function addorder(e) {
    var goodsId = e.currentTarget.dataset.goodsid;
    if (!goodsId) {
      return wx.showModal({
        title: '抱歉',
        content: '您选的菜品暂时无法提供',
        showCancel: false,
        confirmText: '我知道了'
      });
    }
    var chooseGoods = this.data.chooseGoods;
    var goods = chooseGoods.goods;
    var count = goods[goodsId];
    // 已有该商品
    if (count) {
      goods[goodsId] = ++count;
    } else {
      goods[goodsId] = 1;
    }
    chooseGoods.goods = goods;
    this.setData({
      chooseGoods: chooseGoods
    });
    var money = this.calculateMoney();
    chooseGoods.money = money;
    // 增加计数
    ++chooseGoods.allCount;
    this.setData({
      chooseGoods: chooseGoods
    });
    wx.setStorageSync('chooseGoods', this.data.chooseGoods);
  },

  /**
   * 删除商品
   * @param e
   */
  delorder: function delorder(e) {
    var goodsId = e.currentTarget.dataset.goodsid;
    var chooseGoods = this.data.chooseGoods;
    var goods = chooseGoods.goods;
    var count = goods[goodsId];
    goods[goodsId] = --count;
    chooseGoods.goods = goods;
    this.setData({
      chooseGoods: chooseGoods
    });
    var money = this.calculateMoney();
    chooseGoods.money = money;
    // 减少计数
    --chooseGoods.allCount;
    if (chooseGoods.allCount <= 0) {
      this.setData({
        showMask: false,
        showShopCarContent: false
      });
    }
    this.setData({
      chooseGoods: chooseGoods
    });
    wx.setStorageSync('chooseGoods', this.data.chooseGoods);
  }
});
