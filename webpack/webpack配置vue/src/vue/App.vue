<template>
    <div class="userinfo">
        <h2>{{ userName }}</h2>
        <p>{{ age }}</p>
        <p>{{ job }}</p>
        <user-center></user-center>
    </div>
</template>

<script>
import UserCenter from "./user.vue";
export default {
    data() {
        return {
            userName: "Nicholas Zakas",
            age: 51,
            job: "Teacher",
        };
    },
    methods: {
        btnClick() {},
    },
    components: { UserCenter },
};
</script>
<style>
</style>