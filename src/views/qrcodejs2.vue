/**
 * @file 生成二维码的组件
 * @author Walker
 * @date 2020-03-16
 */
 // npm install qrcodejs2 --save 二维码插件
<template>
  <div class="emqrcode">
    <button @click="showQRcode">点击分享二维码</button>
    <div v-show="showqrcode">
      <div id="qrcode" ref="qrcode"></div>
      <!-- 二维码中间logo -->
      <img
        src="@/assets/logo2.jpg"
        style="position: absolute;top: 61px;left: 30px;width:50px;height:40px"
      />
    </div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
export default {
  //   components: { QRCode },
  data() {
    return {
      link: "https://www.baidu.com/",
      showqrcode:false
    };
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
    showQRcode() {
      //二维码初始化 点击一次添加一个二维码
      this.$refs.qrcode.innerHTML = "";
      this.showqrcode=true
      this.$nextTick(function () {
        this.qrcode(124, 124, this.link,"canvas");
      });
    },
  },
};
</script>

<style lang="less">
.emqrcode {
  width: 100%;
  //   background-color: #f00;
}
</style>