<template>
    <div>
        <b>{{ msg }}</b>
        <p>{{ username }}</p>
        <p>{{ age }}</p>
        <p>{{ height }}</p>
        <button @click="clickHandle">$emit传值</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "子组件"
        }
    },
    props: {
        username: {
            type: String,
            default: "Nicholas Zakas"
        },
        age: Number,
        height: {
            type: Number,
            default: 1.98
        }
    },
    methods: {
        clickHandle() {
            let user = {
                name: "LiLei",
                age: 16
            };
            /**
             * $emit提交自定义事件
             * $emit方法通常会传递2个参数：第一个参数为自定义事件名，第二个参数为子组件向父组件传递的数据
             */
            this.$emit("getinfo", user);
        }
    }
}
</script>