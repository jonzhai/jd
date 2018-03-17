<template>
    <div id="nav">
          <ul class="clearfix">
            <li v-for="item in navs" class="navlist">
              <a href="#"  :cat-id="item.cat_id">
                <img :src="item.src" alt="">
                <p v-text="item.title"></p>
              </a>
            </li>
          
          </ul>
    </div>
</template>
<script>
export default {
  data(){
    return {
      navs:[],
    }
  },
  mounted:function(){
    this.$axios.get('/src/assets/data/nav.json')
        .then(response => {
          this.navs = response.data.navs;
        })
        .catch(error=>{
          console.log(error);
        });
  },
  methods:{

  }
}
</script>

<style scoped>
#nav{
	width: 100%;
	background: #fff;
  padding:5px;
  height:200px;
}
#nav >ul{
  display: flex;
  justify-content:space-around;
  flex-wrap:wrap;
  width: 100%;
  height: 100%;
  margin: 0;
}

.navlist{
	width: 25%;
  height: 50%;
	padding:5px;
	text-align: center;
	cursor: pointer;
	
}
.navlist >a{
	color: #000;
  width: 100%;
  height: 100%;
  text-align: center;
  display: block;
  
}
.navlist >a img{
	width:60px ;
}
.navlist >a p{
  height: 30px;
  line-height: 30px;
}
.active{
	background: #eee;
}


</style>	