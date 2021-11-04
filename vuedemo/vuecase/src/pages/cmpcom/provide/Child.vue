<template>
    <div class="child">
        <h5>儿子组件</h5>
        <Child2 />
    </div>
</template>

<script>
import Child2 from "./Child-2.vue";
export default {
    data() {
        return {}
    },
    components: {
        Child2
    }
}
</script>

<style scoped>
.child {
    padding: 20px;
    background-color: floralwhite;
}
</style>