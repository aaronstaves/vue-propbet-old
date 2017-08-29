<template>

  <section>

    <b-field grouped group-multiline>
      <div class="control is-flex">
        <button v-on:click="editUser" class="button field is-primary"
          :disabled="!Object.keys(selected).length">
          <b-icon icon="edit"></b-icon>
          <span>Edit User</span>
        </button>
      </div>
    </b-field>

    <b-table
      :data="users"
      :row-class="(row, index) => 'user-row'"
      :bordered=true
      :striped=true
      :narrowed=false
      :loading=isLoading
      :mobile-cards=true
      :selected.sync="selected"
      default-sort="username"
      default-sort-direction="asc">

      <template scope="props">
        <b-table-column label="ID" width="40" numeric>
            {{ props.row.id }}
        </b-table-column>
        <b-table-column field="username" label="Username" sortable>
            {{ props.row.username }}
        </b-table-column>
        <b-table-column field="name" label="Name" sortable>
            {{ props.row.name }}
        </b-table-column>
        <b-table-column field="email" label="Email" sortable>
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
      defaultSortDirection: 'asc',
      selected: {}
    }
  },
  created() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    axios.get(url).then(({ data }) => {
      this.isLoading = false;
      this.users     = data;
    });
  },
  methods: {
    editUser() {
      const user = this.selected;
      this.$router.push({ name: 'UserView', params: { id: user.id }});

    }
  }
}
</script>

<style scoped>
.user-row td {
  cursor: pointer;
}
</style>
