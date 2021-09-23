<template>
    <div class="user-center">
        <h2 class="title">{{ author }}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            author: "ShaomeiHu",
        };
    },
    methods: {},
};
</script>

<style>
.title {
    color: rgb(193, 230, 30);
}
</style>