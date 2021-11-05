<template>
<button @click="getUsers()">Получить пользователей</button>
  <UserCard v-for="i in users.data" :user='i' :key="i.id"/>

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
      users: {}

    }
  },
  methods: {
    getUsers () {
      fetch('https://reqres.in/api/users?page=2')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.users = data
          console.log(data)
        })
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
