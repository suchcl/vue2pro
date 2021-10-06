<template>
  <div class="user">
    <h2>用户列表</h2>
    <table></table>
    <tr>
      <th>编号</th>
      <th>姓名</th>
      <th>年龄</th>
    </tr>
    <tr v-for="item in userinfo" :key="item.id">
      <td>{{ item.id }}</td>
      <td>
        <!--params方式传参-->
        <router-link :to="'/user/' + item.id">
          {{ item.username }}
        </router-link>
        <!--响应事件的方式传参-->
        <button @click="userClick(item.id)">{{ item.username }}</button>
      </td>
      <td>
        {{ item.age }}
      </td>
    </tr>
  </div>
</template>

<script>
import data from "../assets/user.json";
export default {
  data() {
    return {
      userinfo: data
    };
  },
  methods: {
    userClick(id) {
      this.$router.push({
        path: "/profile",
        params: {
          username: "Mate",
          age: 18,
          job: "Programmer"
        }
      });
    }
  }
};
</script>
