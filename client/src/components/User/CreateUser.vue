<template>
  <div>
    <h1>Create User</h1>
    <form v-on:submit.prevent = "createUser">
      <p>Name: <input type="text" v-model="user_data.name"></p>
      <p>Lastname: <input type="text" v-model="user_data.lastname"></p>
      <p>Email: <input type="text" v-model="user_data.email"></p>
      <p>Password: <input type="text" v-model="user_data.password"></p>
      <p><button type="submit">Create</button></p>
    </form>
    <hr />
    <div>
      <p>Name: {{ user_data }}</p>
    </div>
  </div>
</template>
<script>
import UserService from '@/services/UserService'

export default {
  data () {
    return {
      user_data: {
        name: '',
        lastname: '',
        email: '',
        password: '',
        status: 'A'
      }
    }
  },
  methods: {
    async createUser () {
      try {
        await UserService.post(this.user_data)
        this.$router.push({
          name: 'users'
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped>

</style>
