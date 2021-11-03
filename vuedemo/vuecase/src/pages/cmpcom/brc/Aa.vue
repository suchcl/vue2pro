<template>
    <div class="wrapAa">
        <h5>组件A的子组件</h5>
        <p>{{ num }}</p>
        <button @click="getNum">组件A的子组件监听EventBus通信数据</button>
        <button @click="exeRoot">执行根组件中的方法</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 0
        }
    },
    methods: {
        getNum() {
            this.$EventBus.$on("getNum", (info) => {
                console.log("组件A的子组件");
                this.num = info * 5;
            });
        },
        exeRoot() {
            console.log("要执行根组件的方法了");
            this.$root.showMsg();
        }
    }
}
</script>

<style scoped>
.wrapAa {
    margin-top: 20px;
    padding: 20px;
    background-color: cadetblue;
}
</style>