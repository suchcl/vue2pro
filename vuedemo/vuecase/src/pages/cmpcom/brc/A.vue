<template>
    <div class="wrapA">
        <h3>组件A</h3>
        <p>组件A中的数据{{ num }}</p>
        <button @click="watherEvent">监听事件</button>
        <button @click="exeParent">通过$parent执行父组件中的方法</button>
        <button @click="getParentData">获取父组件中的数据</button>
        <button @click="exeRootFun">执行根组件中的方法</button>
        <Aa />
    </div>
</template>
<script>
import Aa from "./Aa.vue";
export default {
    data() {
        return {
            num: 0
        }
    },
    components: {
        Aa
    },
    methods: {
        watherEvent() {
            //使用Vue原型链引入
            this.$EventBus.$on('getNum', (num) => {
                console.log('num', num)
                this.num = num * num;
            })
        },
        exeParent() {
            this.$parent.showMsg();
        },
        /**
         * 通过$parent访问父组件中的数据
         * 和执行父组件中的方法
         */
        getParentData() {
            // 获取父组件中的数据
            console.log(this.$parent.msg);
        },

        /**
         * 期望通过$root访问根组件中的属性
         * 执行根组件中的方法，但是都失败了
         * 暂时没有找到原因
         */
        exeRootFun() {
            this.$root.showMsg();
        }
    }
}
</script>

<style scoped>
.wrapA {
    margin-bottom: 20px;
    padding: 20px;
    background-color: bisque;
}
</style>