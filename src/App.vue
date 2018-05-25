<template>
  <div class="app">
      <router-view></router-view>
      <div class="mask" v-if="showMask"></div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  computed:{
    ...mapGetters(['showMask'])
  }
}
</script>

<style lang="scss" scoped>
  .mask{
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color:rgba(0,0,0,0.5);
    z-index: 900; 
  }
</style>





