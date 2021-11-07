<template>
<div class="name"  @click="isActive = !isActive"><h4>{{user.first_name}} {{user.last_name}}</h4> </div>
<transition name="fade">
  <div class="card" v-if="isActive">
    <img class="avatar" :src="user.avatar" alt="">

      <UserCardFirstName
        :firstName='user.first_name'
        :id="user.id"
        @edit-user-firstname="$emit('edit-user-firstname', $event)" />
      <UserCardLastName
        :lastName='user.last_name'
        :id="user.id"
        @edit-user-lastname="$emit('edit-user-lastname', $event)" />

    <div><b>id: </b>{{user.id}}</div>
    <UserCardEmail
      :email='user.email'
      :id="user.id"
      @edit-user-email="$emit('edit-user-email', $event)"

      />
      <br>
    <button @click="delUser(user.id)"> dell</button>
  </div>
</transition>

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
    }
  }
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.card{
  border: 2px solid #e0f1fa;
  padding: 20px 40px;
  margin: 10px 0;
}
.avatar{
float: right;
}
h3 {
  margin: 0px 0 0;
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
