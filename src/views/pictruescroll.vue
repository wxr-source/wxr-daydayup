<template>
  <div class="pictruescroll">
      // npm install --save vue-monoplasty-slide-verify 图片滑动验证
<slide-verify :l="42"
            :r="10"
            :w="310"
            :h="155"
            slider-text="向右滑动"
            @success="onSuccess"
            @fail="onFail"
            @refresh="onRefresh"
            ></slide-verify>
<div>{{msg}}</div>
  </div>
</template>

<script>
export default {
 name: 'App',
        data(){
            return {
                msg: '',
            }
        },
        methods: {
            onSuccess(){
                this.msg = 'login success'
            },
            onFail(){
                this.msg = ''
            },
            onRefresh(){
                this.msg = ''
            }
        }
}
</script>

<style>

</style>