<template>
  <div>
    <h1>Edit User</h1>
    <div v-if="user_data">
      <form v-on:submit.prevent = "editUser">
        <p>Name: <input type="text" v-model="user_data.name"></p>
        <p>Lastname: <input type="text" v-model="user_data.lastname"></p>
        <p>Email: <input type="text" v-model="user_data.e_mail"></p>
        <p>Status: <input type="text" v-model="user_data.status"></p>
        <p><button type="submit">Update</button></p>
        <p><button v-on:click="navigateTo('/users')">Cancel</button></p>
      </form>
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
        e_mail: '',
        password: '',
        status: 'A'
      }
    }
  },
  methods: {
    async editUser () {
      try {
        this.user_data.email = this.user_data.e_mail
        await UserService.put(this.user_data)
        this.$router.push({
          name: 'users' /** redirect to /users */
        })
      } catch (error) {
        console.log(error)
      }
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async created () {
    try {
      let userId = this.$route.params.userId
      this.user_data = (await UserService.show(userId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
<style scoped>

</style>
