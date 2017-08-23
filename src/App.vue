<template>
  <div class="app-viewport" id="app">
    <md-toolbar>
      <h1 class="md-title">PropBet App &trade;</h1>
      <br />
      <router-link to="/">Home</router-link>
      <router-link to="users">Users</router-link>
    </md-toolbar>

    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

html,
body,
.app-viewport {
  height: 100%;
  overflow: hidden;
  margin: 0;
}

.app-viewport {
  display: flex;
  flex-flow: column;
}

</style>
