<template>
    <div class="wb">
        <h5>B页面</h5>
        <p>接收到的消息：{{ msg }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: ""
        }
    },
    mounted() {
        this.$EventBus.$on("aMsg", (data) => {
            this.msg = `我是通过EventBus传递过来的信息：${data}`;
            console.log(data);
        });
    },
    beforeDestroy() {
        this.$EventBus.$off("aMsg");
    }
}
</script>

<style scoped>
.wb {
    line-height: 32px;
    padding: 20px;
    background-color: bisque;
}
</style>