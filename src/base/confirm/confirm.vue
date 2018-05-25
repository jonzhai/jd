<template>
    <div class="confirm">
        <div class="content">
            <div class="title">{{title}}</div>
            <div class="btn-container">
                <div @click="cancel">取消</div>
                <div @click="confirm">确认</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
       title:{
           type: String,
           required: true
       } 
    },
    methods:{
      confirm(){
          this.$emit('confirm');
      },
      cancel(){
         this.$emit('cancel'); 
      }  
    }
}
</script>
<style lang="scss" scoped>
    .confirm{
        .content{
            background-color: #fff;
            height: 150px;
            width: 300px;
            display: flex;
            flex-direction: column;
            font-size: 1.2em;
            .title{
                flex: 2;
                display: flex;
                justify-content: center;
                align-items: center;
                 padding: 10px;
            }
            .btn-container{
                flex:1;
                display: flex;
                border-top:1px solid #eee; 
                // padding: 5px 0;
                div{
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    &:last-child{
                        border-left:1px solid #eee; 
                        color:#f00;
                    }
                }
            }
        }
    }
</style>

