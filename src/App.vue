<template>
  <section class="section">
    <NavBar/>

    <div class="container">
      <router-view></router-view>
    </div>
  </section>
</template>
<!--
  <div class="container" id="app">


    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            PropBet™
          </h1>
          <h2 class="subtitle">
            In honor of the Superb Owl
          </h2>
        </div>
      </div>
    </section>

    <section>
      <router-link to="/">Home</router-link>
      <router-link to="users">Users</router-link>
    </section>

    <section>
      <router-view></router-view>
    </section>
  </div>
-->
</template>

<script>
import NavBar from './components/Navbar'

export default {
  name: 'app',
  components: { NavBar }
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
