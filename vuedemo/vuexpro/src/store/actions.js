import {UPDATEATHDESCMUTATION} from '@/store/mutation-types';
export default {
    /**
     * 修改运动员简介
     * context:上下文，在vuex中，就可以简单的理解为store对象
     * action中的方法，默认的第一个参数，不是state了，而是context
     */
    // updateAthDescAction(context,playload){
    //   setTimeout(() => {
    //     context.commit(UPDATEATHDESCMUTATION);
    //     playload(); // 组件中传递过来的函数，这里直接执行即可
    //   },1000);
    // }

    // 下面的实现和上面的实现，都是常规且可行的方案，还有一种通过Promsie的优雅的实现方案
    // updateAthDescAction(context,playload){
    //   setTimeout(() => {
    //     context.commit(UPDATEATHDESCMUTATION);
    //     console.log(playload.message); // 组件中传递过来的是对象，可以直接调用
    //     playload.success();
    //   },1000);
    // }

    // 通过Promise实现
    updateAthDescAction(context,payload){
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit(UPDATEATHDESCMUTATION);
          console.log(payload);
          resolve("action中的参数"); // resolve执行后，不再后面继续执行then，而是在组件派发action的地方去执行then
        },1000);
      });
    }
  }