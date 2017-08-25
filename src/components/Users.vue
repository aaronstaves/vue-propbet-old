<template>

  <section>
    <button v-on:click="editUser" class="button field is-primary"
      :disabled="!Object.keys(selected).length">
      <b-icon icon="edit"></b-icon>
      <span>Edit User</span>
    </button>

    <b-table
      :data="users"
      :row-class="(row, index) => 'user-row'"
      :bordered=true
      :striped=true
      :narrowed=false
      :loading=isLoading
      :mobile-cards=true
      :selected.sync="selected">


      <template scope="props">
        <b-table-column label="ID" width="40" numeric>
            {{ props.row.id }}
        </b-table-column>
        <b-table-column label="Username">
            {{ props.row.username }}
        </b-table-column>
        <b-table-column label="Name">
            {{ props.row.name }}
        </b-table-column>
        <b-table-column label="Email">
            {{ props.row.email }}
        </b-table-column>
      </template>
    </b-table>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'users',
  data () {
    return {
      users: [],

      // table params
      isLoading: true,
      selected: {}
    }
  },
  created() {
    console.log('created users...');
    const url = 'https://jsonplaceholder.typicode.com/users';
    axios.get(url).then(({ data }) => {
      this.isLoading = false;
      this.users     = data;
    });
  },
  methods: {
    editUser() {
      const user = this.selected;
      this.$toast.open({
        message: `Editing ${user.name}`,
        type: 'is-success'
      });

    }
  }
}
</script>

<style scoped>
.user-row td {
  cursor: pointer;
}
</style>
