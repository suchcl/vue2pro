<template>
     <div class="reactive">
         <h3>用户信息</h3>
         <ul>
             <li>姓名: {{person.username}}</li>
             <li>年龄:{{person.age}}</li>
             <li>身高:{{person.height}}</li>
             <li v-if="person.gender">性别:{{person.gender}}</li>
         </ul>
         <ul class="btn-area">
             <li>
                 <button class="btn" @click="addGenderAttr">对象新增属性</button>
             </li>
         </ul>
         <h3>水果</h3>
         <ul class="fruit">
             <li v-for="(item,index) in fruits" :key="index">{{item}}</li>
         </ul>
         <ul class="btn-area">
             <li>
                 <button class="btn" @click="changeFirstFruit">修改第1个水果为哈密瓜</button>
             </li>
         </ul>
     </div>
</template>

<script>
// import Vue from "vue";
export default {
    name: "Reactive",
    data(){
        return {
            person: {
                username: "Nicholas Zakas",
                age: 18,
                height: 1.88
            },
            fruits:["苹果","西瓜","芒果"]
        }
    },
    methods: {
        // 为数据person添加一个性别属性
        addGenderAttr(){
            // console.log(this.person.gender); // undefined
            // this.person.gender = "男"; // 发现这种方式,数据是改了,但是没有响应式的修改界面
            // console.log(this.person.gender); // 男
            
            // 通过Vue.set()向响应式对象动态添加属性,并触发视图的更新
            // Vue.set(this.person,"gender","男");

            // 通过vm.$set()的方式向响应式对象动态添加属性,并触发视图更新
            this.$set(this.person,"gender","女");
        },
        changeFirstFruit(){
            // 通过vm.$set()和Vue.set()都可以实现数组元素的修改
            // this.$set(this.fruits,0,"哈密瓜");
            // Vue.set(this.fruits,0,"哈密瓜");

            // 主要是看通过slice实现数组的响应式
            this.fruits.splice(0,1,"哈密瓜");
        }
    }
}
</script>

<style scoped>
    .reactive {
        line-height: 32px;
        padding-top: 30px;
    }
    .btn {
        padding: 0 10px;
    }
</style>