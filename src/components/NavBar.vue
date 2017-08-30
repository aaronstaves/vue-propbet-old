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
				<router-link v-bind:class="{'is-hidden': loggedIn}" class="navbar-item" to="/signup">Signup</router-link>
        <router-link v-bind:class="{'is-hidden': !loggedIn}" class="navbar-item" to="/users">Users</router-link>
      </div>
    </div>

    <div class="navbar-end">
			<a v-on:click="logout" v-bind:class="{'is-hidden': !loggedIn}" class="navbar-item">Logout</a>
			<span class="burrito-brand-text">allBurritos</span>

    </div>

  	</nav>
  	<hr>


	</section>
</template>

<script>

import {fb} from '../firebase';

export default {
  name: 'navbar',
  data () {
    return {
			isLoading: true,
      isActive: false,
			loggedIn: false
    }
  },
	created() {
		fb.auth().onAuthStateChanged( (user) => {
			console.dir(user);
  		if (user) {
				this.loggedIn = true;
  		}
			else {
				this.loggedIn = false;
			}
		});
	},

  methods: {
    toggleBurger() {
      this.isActive = !this.isActive;
    },
		logout() {
			this.isLoading = true;

			// this.. probably isn't
			fb.auth().signOut()
			.then( () => {
				this.$toast.open({
					message: "Logged out!",
					type: "is-success"
				});
			});
		}
  }
}
</script>

<style scoped>
.burrito-brand-text {
  font-family: 'Pacifico', cursive;
  font-size: 2em;
}
.is-hidden {
	display: none;
}
</style>
