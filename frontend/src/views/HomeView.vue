<script>
import Table from '../components/Table.vue'
import { useUsersStore } from '../stores/users'
export default {
  components: { Table },
  data: () => ({
    apiResponse: null
  }),

  created() {
    const usersStore = useUsersStore()
    usersStore.fetchUsers()
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
    <p class="text-center text-2xl font-medium text-gray-700 mt-2 mb-4">Users table</p>
    <div class="px-40">
      <Table :data="users" />
    </div>
  </main>
</template>
