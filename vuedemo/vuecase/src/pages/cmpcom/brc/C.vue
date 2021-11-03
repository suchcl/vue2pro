<template>
    <div class="wrapC">
        <h5>C组件</h5>
        <A />
        <B />
        <button @click="exeRootfn">执行根组件中的方法</button>
    </div>
</template>

<script>
import A from "./A.vue";
import B from "./B.vue";
export default {
    data() {
        return {
            msg: "被子组件获取的数据"
        }
    },
    components: {
        A, B
    },
    methods: {
        showMsg() {
            console.log("被子组件调用的方法执行了");
        },
        exeRootfn() {
            this.$root.showMsg();
        }
    }
}
</script>

<style>
.wrapC {
    padding: 20px;
    background-color: azure;
}
</style>