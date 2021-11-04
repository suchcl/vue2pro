<template>
    <div class="provide">
        <h5>祖先组件</h5>
        {{ grandpa }}
        <Child />
        <button @click="sendMsg">祖先组件中处理一个数据，发送给子孙组件</button>
    </div>
</template>

<script>
import Child from "./Child.vue";

export default {
    data() {
        return {
            grandpa: "传递过来的数据"
        }
    },
    components: {
        Child
    },
    methods: {
        sendMsg() {
            this.grandpa = "经过修改的祖先数据";
        }
    },
    provide() {
        return {
            foo: this.sendMsg()
        }
    }
}
</script>

<style scoped>
.provide {
    padding: 20px;
    background-color: cornsilk;
}
</style>