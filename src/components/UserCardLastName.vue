<template>
  <div v-if="!isEdited" @click="activeEdit"><b>last name:</b>  {{lastName}} </div>
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
    lastName: String,
    id: Number
  },
  emits: ['edit-user-lastname'],
  data () {
    return {
      isEdited: false,
      newName: ''
    }
  },
  methods: {
    setNewUserName (userID: number, lastName: string) {
      this.$emit('edit-user-lastname', { userID, lastName })
    },
    activeEdit () {
      this.isEdited = !this.isEdited
    }
  }
})
export default class UserCardLastName extends Vue {

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
