 <template>
  <div class="betterscrolltest">
    <div class="filter" v-show="flitershow"> 筛选</div>
    <div class="left" ref="left">
      <ul>
        <li
          v-for="item in 10"
          :key="item"
          @click="getindex(item)"
          :class="active==item?'liactive':''"
        >{{item}}</li>
      </ul>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="main">
        <p v-for="item in 20" :key="item">{{item}}</p>
      </div>
    </div>
  </div>
</template>
// 做左右联动的滑动效果的话应该是左边的列表栏固定右边的内容是超出betterscrolltest盒子
<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      message: "第一页",
      active: 1,
      scroll: null,
      flitershow:false
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
      });
    });
  },
  methods: {
    getindex(index) {
      this.active = index;
    },
  },
  watch: {
    data() {
      this.$nextTick(() => {
        this.scroll.refresh();
      });
    },
  },
};
</script>

<style scoped lang="less">
.betterscrolltest {
  height: 100%;
  display: flex;
  overflow: hidden;
  .left {
    height: 120%;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border-right: 1px solid whitesmoke;
    ul {
      height: 100%;
      li {
        height: 60px;
        text-align: center;
      }
      .liactive {
        background-color: pink;
      }
    }
  }
  .wrapper {
    height:120%;
      width: 80%;
    .main {
      width: 100%;
      height: 120%;
    }
  }
}
</style>