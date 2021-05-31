<template>
  <div id="footnav">
    <van-icon name="chat-o" badge="9" size="30" @click="goToMy('/message')"/>
    <van-icon name="cart-o" size="30" @click="goToMy('/cart')"/>
    <van-icon name="manager-o" size="30" @click="goToMy('/my')"/>
  </div>
</template>

<script>
export default {
 methods:{
     goToMy(arrive){
         this.$router.push(arrive)}
 }
}
</script>

<style>
#footnav{
    width:100%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>