<template>
  <div>
    <h1>Get User By Id</h1>
    <div v-if="user">
      <p>{{ user }}</p>
      <p>ID: {{ user.id }}</p>
      <p>Name: {{ user.name }} {{ user.lastname }}</p>
      <p>Email: {{ user.e_mail }}</p>
      <p>Status: {{ user.status }}</p>
    </div>
  </div>
</template>

<script>
import UserService from '@/services/UserService'

export default {
  data () {
    return {
      userId: 0,
      user: []
    }
  },
  async created () {
    /*
    let userId = this.$route.params.userId
    this.user = (await UserService.show(userId)).data
    */
    /** Refractor Code use try catch */
    try {
      let userId = this.$route.params.userId
      this.user = (await UserService.show(userId)).data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style scoped>
</style>
