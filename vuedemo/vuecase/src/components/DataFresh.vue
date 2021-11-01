<template>
    <div class="data-container">
        <button @click="getHash">获取hash值</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            url: "https://www.baidu.com/#/login"
        }
    },
    props: {
        msg: {
            type: String,
            default: "上垃加载，下拉刷新，默认值"
        }
    },
    methods: {
        getHash() {
            let url = window.location;
            console.log(url.hash);
        }
    }
}
</script>