<template>
  <div class="hello">
    <h3>{{user.first_name}} {{user.last_name}}</h3>

    <img :src="user.avatar" alt="">
    <div> id - {{user.id}}</div>
    <UserCardEmail
      :email='user.email'
      :id="user.id"
      @edit-user-email="$emit('edit-user-email', $event)"
      />
    <button @click="delUser(user.id)"> dell</button>
  </div>
  <hr>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import UserCardEmail from './UserCardEmail.vue'

@Options({
  props: {
    user: Object
  },
  components: {
    UserCardEmail
  },
  emits: ['dell-user', 'edit-user-email'],
  methods: {
    delUser (userID: number) {
      this.$emit('dell-user', userID)
    }
  }
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

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
