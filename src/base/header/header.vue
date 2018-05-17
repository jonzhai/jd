<template>
   <div class="header">
      <div class="back" @click="goBack"></div>
      <div class="title">{{title}}</div>
      <div class="top_nav" @click="openTopNav"><span class="glyphicon glyphicon-option-horizontal"></span></div>
       <transition name="fade">
          <div class="nav-container" v-show="navshow">
            <vertial-nav></vertial-nav>
          </div>
        </transition>
    </div>
</template>
<script>
import vertialNav from '../vertialNav/vertialNav.vue'
export default {

    props:{
        title:{
            type: String
        }
    },
    data(){
        return {
            navshow: false
        }
    },
    methods:{
        goBack(){
            this.$router.back();
        },
        openTopNav(){
            this.navshow = !this.navshow;
            // console.log(this)
        },
    },
    components:{
        vertialNav
    }
}
</script>
<style lang="scss" scoped>
    .header{
        display: -webkit-flex;
        display: flex;
        height: 100%;
        width: 100%;
        // border-bottom: 1px solid #222;
        background-color: #fff;
        position: relative;
        .back{
            width:30px;
            background-image:url(../../assets/images/sprites.png);
            background-size:200px;
            background-clip:content-box;
            padding:5px;
            background-position:-16px 15px;
        }
        .title{
            text-align: center;
            line-height: 50px;
            flex: 1;
            font-size: 1.2em;
        }
        .top_nav{
            width:50px;
            text-align: center;
            line-height: 50px;
        }
        .nav-container{
            position: absolute;
            right: 10px;
            bottom: -210px;
        }
    }
    .fade-enter-active,.fade-leave-active{
        transition: all 0.3s;
    }
    .fade-enter,.fade-leave-to{
        // opacity: 0;
        transform: translate3d(125px,0,0)
    }
</style>


