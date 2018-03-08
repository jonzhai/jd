<template>
  <div id="app">
      <div class="contain">
        <headers></headers>
        <navs></navs>
        <product></product>
        <jdMarket></jdMarket>
        <footers></footers>
      </div>
  </div>
</template>

<script>
  import headers from './components/header.vue';
  import navs from './components/nav.vue';
  import product from './components/product.vue';
  import jdMarket from './components/jdMarket.vue';
  import footers from './components/footer.vue';
  export default {
    name: 'app',
    components:{
      headers: headers,
      navs: navs,
      product: product,
      jdMarket: jdMarket,
      footers:footers,
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
.contain{
  width: 100%;
  max-height: 5000px;
  overflow: hidden;
  background-color: #eee;
}
</style>
