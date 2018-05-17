<template>
  <div class="vertial-nav">
      <ul>
          <li @click="toHome"><span class="glyphicon glyphicon-home"></span><span>首页</span></li>
          <li @click="toClassfiy"><span class="glyphicon glyphicon-list"></span><span>分类搜索</span></li>
          <li><span class="glyphicon glyphicon-shopping-cart"></span><span>购物车</span></li>
          <li @click="toPersonalCenter"><span class="glyphicon glyphicon-user"></span><span>我的京东</span></li>
          <li><span class="glyphicon glyphicon-sunglasses"></span><span>浏览记录</span></li>
      </ul>
  </div>
</template>
<script>
// import {mapGetters} from 'vuex';
import {toNav} from 'src/assets/js/mixin.js'
export default {
    mixins:[toNav]
    // methods:{
    //     toHome(){
    //         this.$router.push({path:'/home'})
    //     },
    //     toClassfiy(){
    //         this.$router.push({path:'/classfiy'});
    //     },
    //     toPersonalCenter(){
    //         //如果当前未登陆，则到login
    //         if(this.curCount){
    //         this.$router.push({path:'/personalCenter'});
    //         }else{
    //         this.$router.push({path:'/login'});
    //         }
    //     }

    // },//methods
    // computed:{
    //     ...mapGetters(['curCount'])
    // }

}
</script>

<style lang="scss" scoped>
    .vertial-nav{
        width: 125px;
        background-color: rgba(0,0,0,0.9);
        border-radius: 3px;
       
        ul{
            width: 100%;
            position: relative;
            &::before{
                position: absolute;
                top:-5px;
                right: 5px;
                width: 10.5px;
                height: 5px;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAYAAAFI2EyZAAAAAXNSR…JPvV0x4mmzAniNPakg981JgEZ7J0N/1aAwodCMAHvpm+ALCRYgJABhMPUAAAAASUVORK5CYII=) no-repeat center center;
                background-size:100% 100%;
                content: ""; 
            }
            li{
                height: 40px;
                width: 100%;
                display: flex;
                span{
                    line-height: 40px;
                    color: #fff;
                    &:first-child{
                        width: 40px;
                        text-align: center;
                    }
                    &:last-child{
                        flex:1;
                    }
                }
            }
        }
    }
</style>

