 <template>
  <div id="my">
    <div id="nav">
      <div>用户信息</div>
      <div id="main">
        <div class="everyshop">
          <div class="collect">
            <van-icon name="star-o" />
            <van-icon name="bookmark-o" />
          </div>
          <span style="font-weight: 700">我的订单</span>
          <span style="font-size: 14px; color: Silver;float:right">查看全部></span>
          <div class="checkAll">
            <van-icon name="pending-payment" />
            <van-icon name="logistics" />
            <van-icon name="comment-o" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
#my {
  width: 100%;
  height: 98%;
  background-color: WhiteSmoke;
  position: relative;
  #nav {
    width: 100%;
    height: 22%;
    background-image: linear-gradient(Tomato, white);
    color: white;
  }
  #main {
    position: absolute;
    width: 98%;
    left: 1%;
    top: 20%;
    background-color: WhiteSmoke;
    .everyshop {
      width: 94%;
      height: 100px;
      border-radius: 20px;
      color: black;
      background-color: white;
      margin-bottom: 10px;
      padding:8px 10px;
      .collect {
        display: flex;
        justify-content: space-around;
        font-size: 20px;
        border-bottom: 1px solid WhiteSmoke;
        padding: 8px 0;
      }
      .checkAll {
        display: flex;
        justify-content: space-between;
        padding: 8px 8px;
      }
    }
  }
}
</style>