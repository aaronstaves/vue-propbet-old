<template>

  <section>

    <b-field grouped class="topmenu">
        <button v-on:click="back" class="button field is-info is-left">
          <b-icon icon="keyboard_backspace"></b-icon>
          <span>Back</span>
        </button>
        <div class="column"></div>
        <button v-on:click="createUser" class="button field is-primary is-right">
          <b-icon pack="fa" icon="user-plus"></b-icon>
          <span>Register</span>
        </button>
    </b-field>

    <b-field label="Email">
        <b-input type="email"
            v-model="user.email"
            maxlength="30">
        </b-input>
    </b-field>

    <b-field label="Password">
        <b-input type="password" v-model="user.password" password-reveal></b-input>
    </b-field>
    <!-- loader -->
    <b-loading :active.sync="isLoading"></b-loading>
  </section>
</template>

<script>
import {fb} from '../firebase';

export default {
  name: 'signup',
  data () {
    return {
      user: {
        email: "",
        password: ""
      },
      isLoading: true,
    }
  },
  created() {
    this.isLoading = false;
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    createUser() {
      this.isLoading = true;
      fb.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then( () => {
        this.isLoading = false;
        this.$toast.open({
          message: "Signed up!",
          type: "is-success"
        });
      })
      .catch( (error) => {

        this.isLoading = false;
        this.$toast.open({
          message: error.message,
          type: "is-danger"
        });
/*
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
         alert(errorMessage);
        }
        */
      });
    }
  }
}
</script>

<style scoped>
</style>
