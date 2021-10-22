<template>
    <div class="child">
        <div class="tt">{{ msg }}</div>
        <button @click="btnClick">子组件中点击事件</button>
        <slot></slot>
        <slot name="btn"></slot>
        <slot name="text"></slot>
        <slot name="userList" :udata="userList">
            <!-- <ul>
                <li v-for="item in userList" :key="item.id">{{ item.name }}</li>
            </ul>-->
        </slot>
        <slot :nickName="Tusi"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            Tusi: "dudu",
            userList: [
                {
                    id: 1,
                    name: "Nicholas"
                },
                {
                    id: 2,
                    name: "Zhangyousheng"
                }
            ]
        }
    },
    props: {
        msg: {
            type: String,
            default: "Hello Vue"
        }
    },
    methods: {
        btnClick() {
            var uname = "Nicholas";
            this.$emit("getName", uname);
        }
    }
}
</script>