<template>
  <div class="detail">
      <div class="toast-container" >
          <toast-squre title="ok" @close="close" v-show="ts"></toast-squre>
      </div>
  </div>
</template>
<script>
import toastSqure from 'base/toast/toast_squre.vue';
export default {
  data(){
    return {
      ts: true
    }
  },
  mounted:function(){
     var id = this.$route.params.id;
      // this.$axios.get('/api/123').then(function(res){
      //   console.log(res)
      // })

  },
  methods:{
    close(){
      this.ts = !this.ts;
    }
  },
  components:{
    toastSqure
  }
}
</script>
<style lang="scss" scoped>
.detail{
  position: relative;
 .toast-container{
    position: absolute;
    left: 50%;
    top:150px;
    transform: translate3d(-50%,-50%,0);
  }
}
 
</style>

