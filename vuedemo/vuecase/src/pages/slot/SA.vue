<template>
    <div class="slot">
        <h3>slot测试</h3>
        <SB>
            <div class="noname">我是从父组件过来的数据,要找默认插槽</div>
            <template slot="test" withAttr="test">
                <div class="withname">
                    <h3>我是从父组件过来的数据,要找的是具名插槽</h3>
                </div>
            </template>
            <div withAttr="test2" slot="test2">
                <div class="wrap-slot-test2">
                    <h3>我是从父组件过来的数据,占用name为test2的slot</h3>
                </div>
            </div>
        </SB>
    </div>
</template>

<script>
import SB from "./SB.vue";
export default {
    components:{
        SB
    }
}
</script>

<style scoped>
    .slot{
        color: #fff;
        padding: 20px;
        background-color:teal;
    }

    .noname{
        background-color: blue;
        padding: 20px;
    }
    .withname {
        margin-bottom: 20px;
        padding: 20px;
        background-color: blueviolet;
    }
    .wrap-slot-test2 {
        margin-bottom: 20px;
        background-color:steelblue;
    }
</style>