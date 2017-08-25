<template>
  <b-table
    :data="isEmpty ? [] : users"
    :bordered="isBordered"
    :striped=1
    :narrowed="isNarrowed"
    :loading="isLoading"
    :mobile-cards="hasMobileCards">

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
</template>

<script>
import axios from 'axios';

export default {
  name: 'users',
  data () {
    return {
      users: [],

      // table params
      isLoading: true
    }
  },
  created() {
    console.log('created users...');
    const url = 'https://jsonplaceholder.typicode.com/users';
    axios.get(url).then(({ data }) => {
      this.isLoading = false;
      this.users     = data;
    });

  }
}
</script>

<style scoped>
</style>
