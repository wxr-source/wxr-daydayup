/**
 * @file 生成二维码的组件
 * @author Walker
 * @date 2020-03-16
 */
 // npm install qrcodejs2 --save 二维码插件
<template>
  <div class="emqrcode">
    <!-- <button @click="showQRcode">点击分享二维码</button> -->
    <div class="main">
      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="svg">
          <text
            x="50%"
            y="50%"
            font-size="14"
            fill="#ff0000"
            font-family="system-ui, sans-serif"
            text-anchor="middle"
            dominant-baseline="middle"
          >我是中国人</text>
        </svg> -->
      <div class="body">
        <div id="qrcode" ref="qrcode"></div>
        <!-- 二维码中间logo -->
        <img src="@/assets/zgr.jpg" class="img" />
        <img src="@/assets/gq.jpg" class="img2" />
        
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
export default {
  //   components: { QRCode },
  data() {
    return {
      link: "https://baike.baidu.com/item/中华人民共和国",
      showqrcode: false,
    };
  },
  created() {
    this.$nextTick(function () {
      this.qrcode(124, 124, this.link, "canvas");
    });
  },
  methods: {
    /**
     * @description 生成二维码
     * @param  {number} qWidth  宽度
     * @param  {number} qHeight  高度
     * @param  {string} qText  二维码内容（跳转连接）
     * @param  {string} qRender 渲染方式（有两种方式 table和canvas，默认是canvas）
     */
    qrcode(qWidth, qHeight, qText, qRender) {
      // 下方这个可以帮助qrcode避开eslint语法检查
      let qrcode = new QRCode("qrcode", {// eslint-disable-line no-unused-vars
        width: qWidth,
        height: qHeight,
        text: qText,
        render: qRender,
      });
    },

    /**
     * @description 点击显示二维码
     */
    // 点击生成二维码方法
    showQRcode() {
      //二维码初始化 点击一次添加一个二维码
      this.$refs.qrcode.innerHTML = "";
      this.showqrcode = true;
      this.$nextTick(function () {
        this.qrcode(124, 124, this.link, "canvas");
      });
    },
  },
};
</script>

<style lang="less">
.emqrcode {
  width: 100%;
  //   background-color: #f00;
  .main {
    width: 400px;
    height: 400px;
    // 文字转svg图片作为背景 
    //转换地址https://www.zhangxinxu.com/sp/svg-text.php
    background:url("data:image/svg+xml,%3Csvg  width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' font-size='12' fill='%23ff3300'  text-anchor='middle' dominant-baseline='middle'  transform='rotate(-45,100,100)'%3E我是中国人%3C/text%3E%3C/svg%3E");
    .body {
      position: relative;
      padding: 2px;

      background-image: linear-gradient(Red, IndianRed, LightCoral);
      width: 124px;
      margin-top: 10px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .img {
        position: absolute;
        width: 50px;
        height: 40px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .img2 {
        position: absolute;
        width: 30px;
        height: 20px;
        top: -6%;
        left: 85%;
      }
    }
  }
}
</style>