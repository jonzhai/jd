<template>
  <div class="app">
      <commonHeader></commonHeader>
  </div>
</template>

<script>
  import commonHeader from './components/common_header.vue';
  export default {
    name: 'app',
    components:{
      commonHeader: commonHeader,
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
        toLogin:function(){
          this.$router.push({path:'/login'})
        },
    }
  }
</script>

<style scoped>
.app{
  width: 100%;
  max-width:768px;
  min-width:200px;
  overflow: hidden;
  background-color: #eee;
  margin:0 auto;
}
</style>
