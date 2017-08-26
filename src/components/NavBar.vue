<template>
  <section>

    <nav class="navbar ">
      <div class="navbar-brand">
          <img src="../assets/burrito-64x64.png">
        <!-- mmm burger -->
        <div v-on:click="toggleBurger" v-bind:class="{'is-active':isActive}" class="navbar-burger burger" data-target="propbet-nav-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

    <div id="propbet-nav-menu" class="navbar-menu" v-bind:class="{'is-active': isActive}">
      <div v-on:click="toggleBurger" class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="users">Users</router-link>
      </div>
    </div>

    <div class="navbar-end">
      <span class="burrito-brand-text">allBurritos</span>
    </div>

  </nav>
  <hr>
  </section>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleBurger() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style scoped>
.burrito-brand-text {
  font-family: 'Pacifico', cursive;
  font-size: 2em;
}
</style>
