<template>
    <div class="child-2">
        <h5>孙子组件</h5>
        <p>
            从祖先组件中获取的数据:
            <span class="fcr">{{ foo }}</span>
        </p>
    </div>
</template>

<script>
export default {
    inject: ["foo"]
}
</script>

<style scoped>
.child-2 {
    margin-top: 20px;
    padding: 20px;
    background-color: cadetblue;
}
.fcr {
    color: #f20;
}
</style>