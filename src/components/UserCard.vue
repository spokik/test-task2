<template>
  <div class="name"  @click="showCard">{{user.first_name}}{{user.last_name}}</div>
  <div class="card" v-if="isActive">
    <h3>
      <UserCardFirstName
        :firstName='user.first_name'
        :id="user.id"
        @edit-user-firstname="$emit('edit-user-firstname', $event)" />
      <UserCardLastName
        :lastName='user.last_name'
        :id="user.id"
        @edit-user-lastname="$emit('edit-user-lastname', $event)" />
    </h3>

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
import UserCardFirstName from './UserCardFirstName.vue'
import UserCardLastName from './UserCardLastName.vue'

@Options({
  props: {
    user: Object
  },
  components: {
    UserCardEmail,
    UserCardFirstName,
    UserCardLastName
  },
  emits: ['dell-user', 'edit-user-email', 'edit-user-lastname', 'edit-user-firstname'],
  data () {
    return { isActive: false }
  },
  methods: {
    delUser (userID: number) {
      this.$emit('dell-user', userID)
    },
    showCard () {
      this.isActive = !this.isActive
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
