<template>
  <section>

    <nav class="navbar ">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="../assets/burrito-32x32.png">
          <span class="burrito-brand-text">allBurritos - PropBet.App</span>
        </router-link>

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
    </div>

  </nav>
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
  font-family: 'Patrick Hand SC', cursive;
}
</style>
