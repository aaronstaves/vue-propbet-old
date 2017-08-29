<template>

  <section>

    <b-field grouped class="topmenu">
        <button v-on:click="back" class="button field is-info is-left">
          <b-icon icon="keyboard_backspace"></b-icon>
          <span>Back</span>
        </button>
        <div class="column"></div>
        <button v-on:click="saveUser" class="button field is-primary is-right">
          <b-icon icon="save"></b-icon>
          <span>Save</span>
        </button>
    </b-field>

    <b-field grouped position="is-right">

    </b-field>


    <b-field label="Name">
        <b-input v-model="user.name"></b-input>
    </b-field>

    <b-field label="Email">
        <b-input type="email"
            v-model="user.email"
            maxlength="30">
        </b-input>
    </b-field>

    <!-- loader -->
    <b-loading :active.sync="isLoading"></b-loading>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'user',
  props: ['id'],
  data () {
    return {
      user: {},

      // table params
      isLoading: true,
    }
  },
  created() {
    const url = `https://jsonplaceholder.typicode.com/users/${this.id}`;
    axios.get(url).then(({ data }) => {
      this.user     = data;
      this.isLoading = false;

    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    saveUser() {
      const url = `https://jsonplaceholder.typicode.com/users/${this.id}`;
      this.isLoading = true;
      axios.put(url, this.user)
        .then(({ data }) => {
          this.isLoading = false;
          this.$toast.open({
            message: 'User saved',
            type: 'is-primary'
          });
        })
        .catch( (error) => {
          this.isLoading = false;
          this.$toast.open({
            message: 'Error saving user data!',
            type: 'is-danger'
          });
        });

    }
  }
}
</script>

<style scoped>
.topmenu {
  width: 100%;
}
</style>
