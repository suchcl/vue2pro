<template>
    <div>
        <p>上平名称：{{ product }}}</p>
        <p>价格：{{ price }}</p>
        <button @click="priceHandle">价格处理</button>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        product: {
            type: String,
            default: "手机"
        },
        price: {
            type: Number,
            default: 0
        }
    },
    methods: {
        priceHandle() {
            let product = {
                name: this.product,
                price: this.price
            };
            this.$emit("priceCommit", product);
        },
        printLog() {
            console.log("测试下$refs执行方法");
        }
    }
}
</script>