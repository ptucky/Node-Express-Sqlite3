<template>
  <div>
    <h1>Get All Users</h1>
    <div v-if="users.length">
      <div>No. User: {{ users.length }}</div>
      <div>ID: {{ users[0].id }}</div>
      <div>Name: {{ users[0].name }} {{ users[0].lastname }}</div>
      <div>Email: {{ users[0].e_mail }}</div>
      <div>Status: {{ users[0].status }}</div>
    </div>
  </div>
</template>
<script>
import UserService from '@/services/UserService'

export default {
  /** 1. call url from node api Cross origin */
  /*
  created () {
    this.$http.get('http://localhost:8081/users')
      .then(function (response) {
        console.log('This is log')
        console.log(response)
      })
  }
  */
  /** 2. Reformat code using import UserService */
  data () {
    return {
      users: []
    }
  },
  async created () {
    /**
      ถ้า users อยู่ใน tag script ใช้ this.users เสมอ
      แต่ถ้า users อยู่ใน tag template หรือ html ใช้  {{ users }}
     */
    this.users = (await UserService.index()).data
    console.log(this.users)
    /*
    let result = (await UserService.index()).data
    console.log(result)
    */
  }
}
</script>
<style scoped>

</style>
