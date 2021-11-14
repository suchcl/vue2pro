<template>
    <header>
        <ul class="nav">
            <li>
                <router-link to="/">首页</router-link>
            </li>
            <li>
                <router-link to="/reactive">Vue2响应式</router-link>
            </li>
            <li>
                <router-link to="/DataFresh">页面刷新</router-link>
            </li>
            <li>
                <router-link to="/slot">slot</router-link>
            </li>
            <li>
                <router-link to="/UserList">用户列表</router-link>
            </li>
            <li>
                <router-link to="/compo/cpcmp">组件通信测试</router-link>
            </li>
            <li>
                <router-link to="/no">不存在的路由</router-link>
            </li>
        </ul>
    </header>
</template>
<style scoped>
ul,
ul,
li {
    list-style: none;
}
.nav {
    display: flex;
}
.nav li {
    margin: 0 10px;
}
</style>
<style>
* {
    margin: 0;
    padding: 0;
}
</style>