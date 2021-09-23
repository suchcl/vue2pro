/**
 * 还可以继续将App.js迁移到一个Vue建中，如App.vue
 */
const App = {
    template: `
    <div class="userinfo">
      <h2>{{ userName }}</h2>
      <p>{{ age }}</p>
      <p>{{ job }}</p>
    </div>
    `,
    data() {
        return {
            userName: "Nicholas Zakas",
            age: 32,
            job: "Teacher"
        }
    },
    methods: {
        btnClick() {

        }
    }
};

export default App;