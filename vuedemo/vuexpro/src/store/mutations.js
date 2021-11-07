import Vue from "vue";
import { INCREMENT, UPDATEATHINFO, UPDATEATHDESCMUTATION } from '@/store/mutation-types';
export default {
    /**
     * 通过action修改state
     * @param {*} state 
     */
    [UPDATEATHDESCMUTATION](state) {
        state.userinfo.height = 3.2;
    },

    // 修改运动员信息
    [UPDATEATHINFO](state) {
        // state.userinfo.name = "Duncan";

        /**
         * 现在从这个地方(mutation中)执行一个异步操作
         * 这里的变化，页面上也响应式的变化了，但是devtools中，并没有跟着变化，没有捕捉到这个变化
         */
        setTimeout(() => {
            state.userinfo.name = "Nicholas Zakas";
        }, 1000)
    },
    // 书的信息修改
    bookInfoChange(state) {
        // 简单的修改书名
        // state.book.name = "Javascript高级程序设计";

        // 移除价格属性  price属性会从book对象中移除掉，但是没有响应的显示到页面中
        // delete state.book.price

        // 通过Vue.delete删除book的price属性 删除后的数据，响应式的显示到了页面上
        Vue.delete(state.book, "price");
    },
    // increment称为事件类型，后面的部分称为回调函数，state是回调函数的第一个参数
    [INCREMENT](state) {
        state.counter++;
    },
    decrement(state) {
        state.counter--;
    },
    /**
     * 接收提交的mutation
     * 如果提交mutaition的时候，是按照type方式提交的，那么这里的第二个参数，则是一个对象，不仅仅是一个具体的变量了，参数名也可更改为payload
     * @param {*} state
     * @param {Object} count 
     */
    incrementCount(state, count) {
        console.log(count);
        state.counter += count.count;
    },
    addStudent(state, stu) {
        state.students.push(stu);
    }
}