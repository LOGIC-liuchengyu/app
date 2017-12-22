'use strict';

// 获取全局应用程序实例对象
const app = getApp();

// 创建页面实例对象
Page({
  data: {
    title: 'index',
    userInfo: null,
    navList: [{
      navTitle: '扫描点餐',
      navIcon: 'iconfont icon-erweima'
    }],
    hotShop: [{
      img: 'https://pbs.twimg.com/media/DOoEOvMWsAEGmQV.jpg:large',
    },
      {
        img: 'https://pbs.twimg.com/media/Cozu1HlVMAAjDXW.jpg:large',
      },
      {
        img: 'http://ossweb-img.qq.com/upload/webplat/info/lol/201608/1470105494_1436653066_5865_imageAddr.jpg',
      }, {
        img: 'https://pbs.twimg.com/media/DOoEOvMWsAEGmQV.jpg:large',
      },
      {
        img: 'https://pbs.twimg.com/media/Cozu1HlVMAAjDXW.jpg:large',
      },
      {
        img: 'http://ossweb-img.qq.com/upload/webplat/info/lol/201608/1470105494_1436653066_5865_imageAddr.jpg',
      }],
    imgUrls:[      'http://ossweb-img.qq.com/upload/webplat/info/lol/201608/1470105494_1436653066_5865_imageAddr.jpg',
      'https://pbs.twimg.com/media/DOoEOvMWsAEGmQV.jpg:large', 
      'https://pbs.twimg.com/media/Cozu1HlVMAAjDXW.jpg:large']
  },
  onLoad: function onLoad() {
    let _this = this;
  
    app.getUserInfo().then(function (info) {
      return _this.setData({ userInfo: info });
    }).catch(console.info);
  },
});