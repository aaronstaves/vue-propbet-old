<template>
  <div class="users">
    <h1>Users</h1>
    <ul>
      <li v-for="user in users">{{user.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      users: []
    }
  },
  created: function() {
    console.log('created users...');
    this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then(function(response) {
        this.users = response.data;
      });

  }
}
</script>

<style scoped>
</style>
