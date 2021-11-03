<template>
    <div class="wrapB">
        <h3>B页面</h3>
        <button @click="sendMsg">触发事件</button>
    </div>
</template>
<script>
export default {
    methods: {
        sendMsg() {
            const num = 2
            //使用Vue原型链引入
            this.$EventBus.$emit('getNum', num)
        }
    }
}
</script>

<style>
.wrapB {
    padding: 20px;
    background-color: burlywood;
}
</style>
