<template>
  <div>
    <section>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-2">
            Propbet.app
          </h1>
          <h2 class="subtitle is-5">
            In honor of the superb owl
          </h2>
        </div>
      </div>
    </section>

    <section v-bind:class="{'is-removed': loggedIn}">
      <p>
        <b-field grouped grouped-multiline position="is-centered">
          <p class="control">

            <b-field  v-on:keyup.native.enter="login">
                <b-input placeholder="Email"
                    v-model="user.email"
                >
                </b-input>
            </b-field>
          </p>

          <p class="control">
            <b-field>
                <b-input v-on:keyup.native.enter="login" placeholder="Password" type="password" v-model="user.password"></b-input>
            </b-field>
          </p>
        </b-field>

      </p>
      <br>
      <p>
        <b-field grouped position="is-centered">
          <b-field>
            <a v-on:click="login" class="button is-outlined">
                <b-icon
                  pack="fa"
                  icon="sign-in"
                  size="is-small"
                  type="is-dark">
                </b-icon>
              <span>
                Login
              </span>
            </a>
          </b-field>
          <b-field>
            <router-link class="button is-outlined" to="/signup">
                <b-icon
                  pack="fa"
                  icon="user-plus"
                  size="is-small"
                  type="is-dark">
                </b-icon>
              <span>
                Register
              </span>
            </router-link>
          </b-field>
        </b-field>
      </p>
    </section>

    <section v-bind:class="{'is-removed': !loggedIn}">
      <div class="container has-text-centered">
        <p>
          Welcome Back!
        </p>
      </div>
    </section>
    <b-loading :active.sync="isLoading"></b-loading>

  </div>
</template>

<script>
import {fb} from '../firebase';

export default {
  name: 'home',
  data () {
    return {
      isLoading: false,
      loggedIn: false,
      user: {
        email: "",
        password: ""
      }
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
    login() {
      this.isLoading = true;
      fb.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
      .then( () => {
        this.isLoading = false;
        this.$toast.open({
          message: "Logged in!",
          type: "is-success"
        });
      })
      .catch( (error) => {

        this.isLoading = false;
        this.$toast.open({
          message: error.message,
          type: "is-danger"
        });
      });
    }
  }
}
</script>

<style scoped>
.is-removed {
  display: none;
}
</style>
