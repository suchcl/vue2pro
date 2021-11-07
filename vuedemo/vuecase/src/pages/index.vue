<template>
    <div class="home">
        <p>{{ msg }}</p>
        <button @click="changeInfo">修改一个值</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "首页"
        }
    },
    methods: {
        changeInfo() {
            this.msg = "这是个新的首页";
        }
    }
}
</script>