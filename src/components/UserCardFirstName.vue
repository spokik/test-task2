<template>
  <div v-if="!isEdited" @click="activeEdit"> {{firstName}} </div>
  <input
    id=""
    v-if="isEdited"
    @change="activeEdit, setNewUserName(id, newName)"
    @blur="activeEdit"
    v-model="newName"
    >
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    firstName: String,
    id: Number
  },
  emits: ['edit-user-firstname'],
  data () {
    return {
      isEdited: false,
      newName: ''
    }
  },
  methods: {
    setNewUserName (userID: number, firstName: string) {
      this.$emit('edit-user-firstname', { userID, firstName })
    },
    activeEdit () {
      this.isEdited = !this.isEdited
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
