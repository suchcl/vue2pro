import { UPDATEBOOKNAME, ASYNCUPDATEBOOKNAME } from '@/store/mutation-types';
export default {
    state: {
        bookName: "Javascript数据结构与算法",
        price: 69.00,
        author: "罗伊安妮.格罗纳"
    },
    getters: {
        // state：当前module下的state
        bookBaseInfo(state) {
            return `书名:${state.bookName}，作者：${state.author}`;
        },
        // getters：就是当前的getters，可以调用当前module中getters中的其他属性
        bookAllBaseInfo(state, getters) {
            return `${getters.bookBaseInfo}，价格：${state.price}`;
        },
        // rootState,根state，可以通过rootState获取根state中的状态
        bookAllInfo(state, getters, rootState) {
            return `${getters.bookAllBaseInfo}，数量为：${rootState.counter}`;
        }
    },
    mutations: {
        [UPDATEBOOKNAME](state) {
            state.bookName = "Javascript权威指南";
        },
        [ASYNCUPDATEBOOKNAME](state, payload) {
            console.log(state);
            state.bookName = payload;
        }
    },
    actions: {
        aAsyncUpDateBookNameByAction(context, payload) {
            setTimeout(() => {
                context.commit(ASYNCUPDATEBOOKNAME, payload)
            }, 1000);
        }
    },
    modules: {}
}