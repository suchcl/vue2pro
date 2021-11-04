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
            <li>
                <router-link to="provide">provide/inject</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

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