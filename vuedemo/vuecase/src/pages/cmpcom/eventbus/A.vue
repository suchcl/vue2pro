<template>
    <div class="wa">
        <h5>A页面</h5>
        <button @click="sendMsg">发送消息</button>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        sendMsg() {
            this.$EventBus.$emit("aMsg", "来自a页面的消息");
        }
    }
}
</script>

<style scoped>
.wa {
    line-height: 32px;
    padding: 20px;
    background-color: azure;
}
</style>