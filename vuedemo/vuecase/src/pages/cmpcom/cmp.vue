<!--组件通信-->
<template>
    <div class="cmptest">
        <ul class="nav">
            <li>
                <router-link to="cpcmp">props传值</router-link>
            </li>
            <li>
                <router-link to="bro">$emit传值</router-link>
            </li>
            <li>
                <router-link to="c">EventBus</router-link>
            </li>
        </ul>
        <router-view></router-view>
        <button @click="exeRootFn">CMP执行父组件的方法</button>
    </div>
</template>

<script>
export default {
    methods: {
        exeRootFn() {
            this.$root.showMsg();
        }
    }
}
</script>
<style scoped>
.cmptest {
    text-align: left;
}
ul,
li,
ol {
    list-style: none;
}
.nav {
    display: flex;
    margin-top: 20px;
}
.nav li {
    margin: 0 15px;
}
</style>