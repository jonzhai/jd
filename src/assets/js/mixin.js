import {mapGetters} from 'vuex';
export const toNav = {
    methods:{
        toHome(){
            this.$router.push({path:'/home'})
        },
        toClassfiy(){
            this.$router.push({path:'/classfiy'});
        },
        toPersonalCenter(){
            //如果当前未登陆，则到login
            if(this.curCount){
                this.$router.push({path:'/personalCenter'});
            }else{
                this.$router.push({path:'/login'});
            }
        }
      
    },
    computed:{
        ...mapGetters(['curCount'])
    }

}