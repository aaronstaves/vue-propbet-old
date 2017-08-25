<template>
  <section>
    <nav class="navbar ">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://bulma.io">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
      </div>
    </nav>

    <div id="navMenubd-propbet" class="navbar-menu">
      <div class="navbar-start">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="users">Users</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
