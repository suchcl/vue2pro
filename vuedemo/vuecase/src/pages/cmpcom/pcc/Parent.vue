<template>
    <div>
        <b>{{ msg }}</b>
        <!-- 监听子组件通过$emit定义的自定义事件: getinfo -->
        <child
            :username="username"
            :age="age"
            :height="height"
            @getinfo="getUserInfo"
            ref="userinfo"
        />
        <product
            :product="product.name"
            :price="product.price"
            @priceCommit="getProductInfo"
            ref="product"
        />
        <div class="btn-area">
            <ul>
                <li>
                    <button @click="getUserName">用户信息</button>
                </li>
                <li>
                    <button @click="getProductName">产品信息</button>
                </li>
                <li>
                    <button @click="exeMed">ref执行组件方法</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Child from "./Children.vue";
import Product from "./Product.vue";
export default {
    data() {
        return {
            msg: "父组件",
            username: "HanMeimei",
            age: 18,
            height: 1.62,
            product: {
                name: "电脑",
                price: 2500
            }
        }
    },
    components: {
        Child, Product
    },
    methods: {
        /**
         * 响应函数：子组件通过$emit传递过来的自定义事件
         * 响应函数第一个参数，默认为从子组件传递过来的数据
         */
        getUserInfo(data) {
            let { name, age } = data;
            console.log(name, age);
        },
        getProductInfo(data) {
            let { name, price } = data;
            console.log(name, price);
        },
        getUserName() {
            console.log(this.$refs.userinfo.height);
        },
        getProductName() {
            console.log(this.$refs.product.product);
        },
        exeMed() {
            /**
             * 通过ref执行子组件中的方法
             * 注意这个方法要定义在子组件中
             */
            this.$refs.product.printLog();
        }
    }
}
</script>