<template>
  <div class="hello">
    <h3>{{user.first_name}} {{user.last_name}}</h3>

    <img :src="user.avatar" alt="">
    <div> id - {{user.id}}</div>
    <div> email - {{user.email}}</div>
    <button @click="delUser(user.id)"> dell</button>
  </div>
  <hr>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    user: Array
  },
  methods: {
    delUser (userID: number) {
      console.log(userID)
      this.$emit('dell-user', userID)
    }
  }
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
