 <template>
  <div class="test">
    <div class="body">
      <p>dafa aa a</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.test {
  height: 100%;
  .body {
    width: 100%;
    overflow-x: scroll;
    overflow-y: scroll;
    p {
      width: 120%;
      
    }
  }
  // 注意层级要放在over-flow元素的那一层上面
  /* 设置滚动条的样式 */
  ::-webkit-scrollbar {
    width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
    height: 10px;
    background-color: aqua;
  }

  ::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 10px;
  } /* 滚动条的滑轨背景颜色 */

  ::-webkit-scrollbar-thumb {
    background-color: pink;
    border-radius: 10px;
  } /* 滑块颜色 */

  ::-webkit-scrollbar-button {
    background-color: red;
  } /* 滑轨两头的监听按钮颜色 */

  ::-webkit-scrollbar-corner {
    background-color: white;
  } /* 横向滚动条和纵向滚动条相交处尖角的颜色 */
}
</style>