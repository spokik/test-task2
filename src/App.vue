<template>
<button @click="getUsers()">Получить пользователей</button>
  <UserCard
    v-for="i in loadUsers"
    :user='i'
    :key="i.id"
    @dell-user="delUser"
    />

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import UserCard from './components/UserCard.vue'

@Options({
  components: {
    UserCard
  },
  data () {
    return {
      users: {},
      loadUsers: {}
    }
  },
  mounted () {
    const load = JSON.parse(localStorage.getItem('users') || '{}')
    this.loadUsers = load
  },
  methods: {
    getUsers () {
      fetch('https://reqres.in/api/users?page=2')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.users = data.data
        })
    },
    delUser (userID: number) {
      const filtred = this.loadUsers.filter(function (user: any) {
        return user.id !== userID
      })
      this.loadUsers = filtred
    }

  },
  watch: {
    users () {
      localStorage.setItem('users', JSON.stringify(this.users))
    },
    loadUsers () {
      localStorage.setItem('users', JSON.stringify(this.loadUsers))
    }
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
