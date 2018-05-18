<template>
    <div class="radios" @click="checkItem()">
        <div :class="{option:true,active:isChecked}">
            <span v-show="isChecked" class="glyphicon glyphicon-ok"></span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        checked:{
            type: Boolean,
            default: true
        }
    },
    data(){
        return {
            isChecked: true
        }
    },
    watch:{
        checked:function(){
            this.isChecked = this.checked;
        }
    },
    methods:{
        checkItem(){
            this.isChecked = !this.isChecked
            if(this.isChecked){
                this.$emit('checked')
            }else{
                this.$emit('unchecked')
                
            }
        },
    }
}
</script>

<style lang="scss" scoped>
    .option{
        height: 20px;
        width: 20px;
        border-radius: 50%;
        border: 1px solid rgba(0,0,0,0.7); 
        &.active{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f00;
            color: #fff;
            font-size: 10px;
            border: 0;
        }
    }
</style>