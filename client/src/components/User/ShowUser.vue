<template>
  <div>
    <h1>Get User By Id</h1>
    <div v-if="user.length">
      <p>ID: {{ user }}</p>
      <p>ID: {{ user[0].id }}</p>
      <p>Name: {{ user[0].name }} {{ user[0].lastname }}</p>
      <p>Email: {{ user[0].e_mail }}</p>
      <p>Status: {{ user[0].status }}</p>
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
