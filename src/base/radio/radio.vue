<template>
    <div class="radio">
        <div :class="{option:true,active:showOption}">
            <span v-show="showOption" class="glyphicon glyphicon-ok"></span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        showOption:{
            type: Boolean,
            default: false
        }

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