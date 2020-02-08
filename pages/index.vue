<template>
  <div class="container d-flex flex-column">
    <AddUser
    v-if="isAddVisible"
    @close="onCloseAddModal"
    @add="onAddUser" />
    <UserInfo
    v-if="isInfoVisible"
    @close="onCloseInfo"
    :currentUser="currentUser" />
    <h1 class="title">Users</h1>
    <div class="d-flex flex-row-reverse">
      <button @click="onShowAddModal" class="btn btn-outline-primary btn-lg">
        Add user
      </button>
    </div>
    <UserTable
    @remove="onRemoveUser"
    @showInfo="onShowInfo"
    @sort="onSort"
    :users="users" />
  </div>
</template>

<script>
import UserTable from '../components/UserTable'
import AddUser from '../components/AddUser'
import UserInfo from '../components/UserInfo'
export default {
  name: 'MainPage',
  components: { UserTable, AddUser, UserInfo },
  data: () => ({
    isAddVisible: false,
    isInfoVisible: false,
    currentUser: null,
    sortOrder: null
  }),
  async asyncData ({ $axios }) {
    let users = []
    try {
      users = await $axios.$get('/users')
    } catch (e) {
      console.log(e)
    }
    return { users }
  },
  methods: {
    onShowAddModal () {
      this.isAddVisible = true
    },
    onCloseAddModal () {
      this.isAddVisible = false
    },
    async onAddUser (newUser) {
      try {
        const newUserObj = await this.$axios.$post('/users', newUser)
        this.users.push(newUserObj)
      } catch (e) {
        console.log(e)
      }
      this.isAddVisible = false
    },
    async onRemoveUser (user) {
      if (!confirm(`Delete ${user.name}?`)) {
        return
      }
      try {
        await this.$axios.$delete(`/users/${user.id}`)
        const index = this.users.findIndex(el => el.id === user.id)
        this.users.splice(index, 1)
      } catch (e) {
        console.log(e)
      }
    },
    onShowInfo (user) {
      this.currentUser = user
      this.isInfoVisible = true
    },
    onCloseInfo () {
      this.isInfoVisible = false
      this.currentUser = null
    },
    async onSort (field) {
      if (this.sortOrder === null ||
          this.sortOrder === 'desc') {
        this.sortOrder = 'asc'
      } else {
        this.sortOrder = 'desc'
      }
      try {
        this.users = await this.$axios.$get(`/users?_sort=${field}&_order=${this.sortOrder}`)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss">

.title {
  text-align: center;
  margin: 20px 0 20px 0;
}

.container {
  width: 100% !important;
  margin: 0 !important;
  max-width: 100%;
  padding: 0;
}

.btn-outline-primary {
  color: white;
  background-color: black;
  border-color: black;
  margin: 10px;
  width: 10%;

  &:hover {
    background-color: white;
    border-color: black;
    color: black;
  }
  &:active {
    background-color: white !important;
    border-color: black !important;
    color: black !important;
  }
}
</style>
