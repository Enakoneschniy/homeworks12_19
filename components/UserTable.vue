<template>
  <table class="table user-table table-striped">
    <thead class="thead-dark">
      <tr>
        <th class="clickable" @click="onSort('name')">Name</th>
        <th class="clickable" @click="onSort('username')">Username</th>
        <th class="clickable" @click="onSort('email')">Email</th>
        <th>Info</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
      <UserListItem
      @remove="onRemoveUser"
      @showInfo="onShowInfo"
      v-for="user of users"
      :key="user.id"
      :user="user" />
    </tbody>
  </table>
</template>

<script>
import UserListItem from './UserListItem'
export default {
  name: 'UserTable',
  components: { UserListItem },
  props: {
    users: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    onRemoveUser (user) {
      this.$emit('remove', user)
    },
    onShowInfo (user) {
      this.$emit('showInfo', user)
    },
    onSort (field) {
      this.$emit('sort', field)
    }
  }
}
</script>

<style>
  .user-table {
    margin: 20px 0 20px 0 !important;
    width: 100% !important;
  }
  .clickable {
    cursor: pointer;
  }
</style>
