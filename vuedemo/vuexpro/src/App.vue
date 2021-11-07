<template>
  <div id="app">
    <router-view></router-view>
    <div class="module-demo">
      <h3>vuex中的modules案例</h3>
      <h5>获取modules中的state值</h5>
      <p>书名：《{{ $store.state.fbook.bookName }}》</p>
      <button @click="updateBookName">更改书名</button>
    </div>
    <div class="athletes">
      <h5>姓名：{{ $store.state.userinfo.name }}</h5>
      <p>身高：{{ $store.state.userinfo.height }}</p>
      <button @click="updateAth">mutation修改信息</button>
      <button @click="updateAthByAction">通过action异步操作，修改信息</button>
    </div>
    <h3>delete和Vue.delete</h3>
    <div class="books">
      <h4>书名：{{ book.name }}</h4>
      <p v-if="book.price">价格：{{ book.price }}</p>
      <p>作者： {{ book.author }}</p>
      <button @click="bookInfoChange" class="btn-book">修改属性</button>
    </div>
    <h1>Slot</h1>
    <nick-name>
      <template slot-scope="scope">
        <div>{{ scope.nickName }}</div>
      </template>
    </nick-name>
    <h2>-------App组件-------</h2>
    <h2>{{ msg }}</h2>
    <h3>{{ $store.state.counter }}</h3>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>
    <h2>---------App组件 Getters----------</h2>
    <p class="text">{{ $store.getters.powerCounter }}</p>
    <h2>------年龄大于20岁的学生-----</h2>
    <div class="stu-info">
      <h3>通过计算属性获取</h3>
      <table>
        <tr>
          <th>学号</th>
          <th>姓名</th>
          <th>年龄</th>
        </tr>
        <tr v-for="item in over20YearsOld" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
        </tr>
      </table>
      <h3>通过vuex获取</h3>
      <table>
        <tr>
          <th>学号</th>
          <th>姓名</th>
          <th>年龄</th>
        </tr>
        <tr v-for="item in $store.getters.over20YearsOld" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
        </tr>
      </table>
      <p>大于20岁的学生总数：{{ $store.getters.over20YearsOldNum }}</p>
      <h3>大于自定义年龄的学生信息:以17岁为例</h3>
      <table>
        <tr>
          <th>学号</th>
          <th>姓名</th>
          <th>年龄</th>
        </tr>
        <!--overAgeYearsOldNum是一个getters，它返回了一个函数，让函数在执行时传入一个自定义参数-->
        <tr v-for="item in $store.getters.overAgeYearsOldNum(17)" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
        </tr>
      </table>
    </div>
    <h2>------子组件---------</h2>
    <user-center :username="username" />
    <h2>---------子组件----------</h2>
    <tt :msg="info" @getName="getName">
      <div>
        <h3>这里是一个slot</h3>
        <button slot="btn">这是一个slot占位的button</button>
        <p slot="text">这里是一个slot占位的text</p>
        <template slot-scope="scope">
          <div>{{ scope.nickName }}</div>
        </template>
      </div>
    </tt>
    <button @click="getWindowHeight">window高度 clientHeight</button>
    <button @click="getScrollHeight">body高度 scrollHeight</button>
    <button @click="getScrollTop">scrollTop</button>
  </div>
</template>

<script>
import UserCenter from "./components/UserCenter.vue";
import Tt from "./components/tt.vue";
import NickName from "./components/NickName.vue";
import { INCREMENT, UPDATEATHINFO, UPDATEBOOKNAME } from "./store/mutation-types";
export default {
  name: "App",
  components: {
    UserCenter,
    Tt,
    NickName
  },
  data() {
    return {
      msg: "我是App组件",
      username: "Nicholas Zakas",
      info: "闫士敬",
      book: this.$store.state.book
    };
  },
  mounted() {
    // window.addEventListener("scroll", this.dataRefresh)

  },
  computed: {
    over20YearsOld() {
      // 通过数组的filter过滤器筛选
      return this.$store.state.students.filter(item => {
        return item.age >= 20;
      });
    }
  },
  methods: {
    // 更改书名
    updateBookName() {
      this.$store.commit(UPDATEBOOKNAME);
    },
    // /**
    //  * 通过action，有异步操作，去修改state
    //  * 第2个参数，可以是函数，可以是字符串，也可以是对象
    //  */
    // updateAthByAction() {
    //   this.$store.dispatch("updateAthDescAction", () => { // 第2个参数为函数
    //     console.log("内部代码已经执行完了");
    //   });
    // },

    // 下面的代码和上面的代码都是正常且常规的实现，还有另外一种更优雅的实现：Promise
    // updateAthByAction() {
    //   this.$store.dispatch("updateAthDescAction", {
    //     message: "我是组件中携带的参数",
    //     success: () => {
    //       console.log("组件中的代码已经执行完成");
    //     }
    //   })
    // },

    // promise实现
    updateAthByAction() {
      this.$store.dispatch("updateAthDescAction", "我从组件携带的参数").then(res => {
        console.log(res);
      });
    },

    // 修改运动员信息
    updateAth() {
      this.$store.commit(UPDATEATHINFO);
    },
    // 修改state中book的属性
    bookInfoChange() {
      this.$store.commit("bookInfoChange");
    },
    addition() {
      this.$store.commit(INCREMENT);
    },
    subtraction() {
      this.$store.commit("decrement");
    },
    getName(data) {
      console.log(data);
    },
    addCount(count) {
      // 普通的mutation提交方式
      // this.$store.commit("incrementCount", count);

      /**
       * 特殊的通过type的方式提交mutation
       * 通过这种方式提交，commit方法后面就需要跟一个对象参数了
       * type：就是mutation的事件名称
       * 再往后的一个参数：已经不仅仅是当前要提交的具体参数了，比如案例中的count已经不仅仅是代码中的count变量了，而是当前的这次提交的对象
       * 在mutation中接收的时候，接收的也是一个对象
       */
      this.$store.commit({
        type: "incrementCount",
        count
      });
    },
    addStudent() {
      const student = {
        id: 108,
        name: "Iverson",
        age: 29
      };
      this.$store.commit("addStudent", student);
    },
    getWindowHeight() {
      // 浏览器高度
      let windowHeight = document.documentElement.clientHeight;
      console.log("windowHeight: " + windowHeight);
    },
    getScrollHeight() {
      // scrollHeight
      let scrollHeight = document.body.scrollHeight;
      console.log(`scrollHeight: ${scrollHeight}`);
    },
    getScrollTop() {
      // scrollTop
      let scrollTop = document.documentElement.scrollTop;
      console.log(`scrollTop: ${scrollTop}`);
    },
    dataRefresh() {
      // 获取文档高度、页面滚动高度和浏览器窗口高度
      let windowHeight = document.documentElement.clientHeight;
      let scrollTop = document.documentElement.scrollTop;
      let scrollHeight = document.body.scrollHeight;
      // console.log("页面scroll");
      // 设置页面居理底部居理
      let distance = 50;
      if (scrollTop + windowHeight >= scrollHeight - distance) {
        // 上拉加载逻辑代码
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 2000px;
}
h3,
.text {
  font-size: 32px;
}
.books {
  text-align: left;
  padding-left: 40px;
}
.btn-book {
  padding: 0 10px;
}
.athletes {
  text-align: left;
  width: 300px;
  padding-left: 40px;
}
.module-demo {
  padding: 20px;
  background-color: antiquewhite;
}
</style>