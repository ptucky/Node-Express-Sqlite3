<template>
  <div>
    <h1>Get All Users</h1>
    <p><button class="add" v-on:click="navigateTo('/user/create')">Create User</button></p>
    <br />
    <h4>No. User: {{ users.length }}</h4>
    <div v-for="user in users" v-bind:key="user.id">
      <p>ID: {{ user.id }}</p>
      <p>Name: {{ user.name }} {{ user.lastname }}</p>
      <p>Email: {{ user.e_mail }}</p>
      <p>Status: {{ user.status }}</p>
      <div>
        <div class="box-btn">
          <button class="delete" v-on:click="deleteUser(user)">Delete</button>
        </div>
        <div class="box-btn">
          <button v-on:click="navigateTo('/user/edit/' + user.id)">Edit</button>
        </div>
        <div class="box-btn">
          <button v-on:click="navigateTo('/user/' + user.id)">View</button>
        </div>
      </div>
      <div style="clear: both;"></div>
      <hr />
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
  /**
  ถ้า users อยู่ใน tag script ใช้ this.users เสมอ
  แต่ถ้า users อยู่ใน tag template หรือ html ใช้  {{ users }}
  */
  data () {
    return {
      users: []
    }
  },
  async created () {
    /** creted () เริ่มต้น */
    try {
      this.users = (await UserService.index()).data
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async deleteUser (user) {
      let result = confirm('Do you want to delete account?')
      if (result) {
        try {
          await UserService.delete(user)
          this.refreshData()
        } catch (err) {
          console.log(err)
        }
      }
    },
    async refreshData () {
      this.users = (await UserService.index()).data
    }
  }
}
</script>
<style scoped>
  .box-btn{
    width: 100px;
    float: left;
  }
  .add {
    background: green;
    color: white;
  }
  .delete {
    background: red;
    color: white;
  }
</style>
