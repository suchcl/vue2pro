<template>
  <div>
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
          <router-link :to="'/user/' + item.id">{{ item.username }}</router-link>
        </td>
        <td>{{ item.age }}</td>
      </tr>
    </div>
    <div class="test-user">
      <ul>
        <!-- v-for和v-if不要同时使用 -->
        <!-- <li v-for="item in userinfo" :key="item.id" v-if="item.isActive">{{ item.username }}</li> -->
        <!-- <li v-for="item in userinfo" :key="item.id">
          <span v-if="item.isActive">{{ item.username }}</span>
        </li>-->
        <li v-for="item in activeUsers" :key="item.id">{{ item.username }}</li>
      </ul>
    </div>
    <!--watch\computed-->
    <div class="username">
      <h4>姓名：{{ fullname }}</h4>
      <div class="firstname">
        FirstName:
        <input type="text" v-model="firstname" />
      </div>
    </div>
  </div>
</template>

<script>
import data from "../assets/user.json";
export default {
  data() {
    return {
      userinfo: data,
      firstname: "Nicholas",
      lastname: "Zakas",
      fullname: ""
    };
  },
  computed: {
    activeUsers() {
      return this.userinfo.filter((item) => {
        return item.isActive;
      });
    }
  },
  methods: {
    newElement() {
      var div = document.createElement("div");
      var str = "";
      for (var key in div) {
        str = str + key + " ";
      }
    }
  },
  watch: {
    firstname(newName, oldName) {
      this.fullname = newName + this.lastname;
    }
  }
};
</script>

<style scoped>
ul,
li,
ol {
  list-style: none;
}
</style>