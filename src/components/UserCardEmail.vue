<template>
  <div v-if="!isEditedEmail" @click="activeEdit"><b>Email: </b>{{email}} </div>
  <input
    id=""
    v-if="isEditedEmail"
    @change="activeEdit, setNewUserEmail(id, newEmail)"
    @blur="activeEdit"
    v-model="newEmail"
    >
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    email: String,
    id: Number
  },
  emits: ['edit-user-email'],
  data () {
    return {
      isEditedEmail: false,
      newEmail: ''
    }
  },
  methods: {
    setNewUserEmail (userID: number, userEmail: string) {
      this.$emit('edit-user-email', { userID, userEmail })
    },
    activeEdit () {
      this.isEditedEmail = !this.isEditedEmail
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
