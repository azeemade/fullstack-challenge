<!-- <script setup lang="ts">
import ApiTest from "@/components/ApiTest.vue";
</script> -->
<script>
import Table from '../components/Table.vue'
import { mapActions } from 'pinia'
import { useUsersStore } from '../stores/users'
export default {
  components: { Table },
  data: () => ({
    apiResponse: null
  }),

  created() {
    // ...mapActions(useUsersStore, ['fetchUsers'])
    const usersStore = useUsersStore()
    usersStore.fetchUsers()
  },

  methods: {
    // async fetchData() {
    //   const url = 'http://127.0.0.1:8001'
    //   var res = await (await fetch(url)).json()
    //   this.apiResponse = res.users
    // }
  },

  computed : {
    users() {
      const usersStore = useUsersStore()
      return usersStore.usersGetter
    }
  }
}
</script>

<template>
  <main>
    <Table :data="users" />
  </main>
</template>
