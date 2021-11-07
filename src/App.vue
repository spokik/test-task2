<template>
<button @click="getUsers()">Получить пользователей</button>
  <UserCard
    v-for="i in loadUsers"
    :user='i'
    :key="i.id"
    @dell-user="delUser"
    @edit-user-email="setNewUserEmail"
    @edit-user-lastname="setNewUserLastName"
    @edit-user-firstname="setNewUserFirstName"
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
          this.loadUsers = data.data
          this.addLog(0, 'all users was updated', '')
        })
    },
    delUser (userID: number) {
      const filtred = this.loadUsers.filter((user: {id: number}) => user.id !== userID)
      this.loadUsers = filtred
      this.addLog(userID, 'user was deleted', '')
    },
    setNewUserEmail (event:{userID: number, userEmail: string}) {
      const result = this.loadUsers.findIndex((item: any) => item.id === event.userID)
      const spredArr = [...this.loadUsers]
      spredArr[result].email = event.userEmail
      this.loadUsers = spredArr
      this.addLog(event.userID, 'email', event.userEmail)
    },
    setNewUserFirstName (event:{userID: number, firstName: string}) {
      const result = this.loadUsers.findIndex((item: any) => item.id === event.userID)
      const spredArr = [...this.loadUsers]
      spredArr[result].first_name = event.firstName
      this.loadUsers = spredArr
      this.addLog(event.userID, 'firstName', event.firstName)
    },
    setNewUserLastName (event:{userID: number, lastName: string}) {
      const result = this.loadUsers.findIndex((item: any) => item.id === event.userID)
      const spredArr = [...this.loadUsers]
      spredArr[result].last_name = event.lastName
      this.loadUsers = spredArr
      this.addLog(event.userID, 'lastName', event.lastName)
    },
    addLog (id:number, editer: string, newValue: string | number) {
      const logs = JSON.parse(localStorage.getItem('log') || '[]')
      const now = new Date()
      const log = {
        data: now,
        id: id,
        [editer]: newValue
      }
      logs.push(log)
      localStorage.setItem('log', JSON.stringify(logs))
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
