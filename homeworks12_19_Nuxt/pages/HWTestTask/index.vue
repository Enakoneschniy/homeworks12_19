<template>
  <div class="container">
    <h1>Home Work Test Task</h1>
    <table class="table">
      <thead>
        <tr @click.prevent.stop="onSortTitle($event)">
          <th class="cursor" data-label="id">
            #
          </th>
          <th data-label="name">
            Name
          </th>
          <th data-label="username">
            User Name
          </th>
          <th data-label="email">
            Email
          </th>
          <th data-label="website">
            Website
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user of users" @click.prevent.stop="onShowUser(user)">
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.website }}</td>
        </tr>
      </tbody>
    </table>
    <!------------------Модальное окно--------------------------------->

    <div class="modal fade">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">
              Detail list
            </h4>
            <button @click.prevent.stop="onOff()" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <tabla class="detail">
                <tbody>
                  <tr>
                    <th><label for="id">id:</label></th>
                    <td><input id="id" v-model="user.id" type="text" class="form-control" disabled></td>
                  </tr>
                  <tr>
                    <th><label for="name">Name:</label></th>
                    <td><input id="name" v-model="user.name" type="text" class="form-control"></td>
                  </tr>
                  <tr>
                    <th><label for="username">User Name:</label></th>
                    <td><input id="username" v-model="user.username" type="text" class="form-control"></td>
                  </tr>
                  <tr>
                    <th><label for="email">Email:</label></th>
                    <td><input id="email" v-model="user.email" type="email" class="form-control"></td>
                  </tr>
                  <tr>
                    <th><label for="website">Website:</label></th>
                    <td><input id="website" v-model="user.website" type="text" class="form-control"></td>
                  </tr>
                  <tr>
                    <th><label for="street">Street:</label></th>
                    <td><input id="street" v-model="userAdr.street" type="text" class="form-control"></td>
                  </tr>
                  <tr>
                    <th><label for="city">City:</label></th>
                    <td><input id="city" v-model="userAdr.city" type="text" class="form-control"></td>
                  </tr>
                  <tr>
                    <th><label for="zipcode">Zipcode:</label></th>
                    <td><input id="zipcode" v-model="userAdr.zipcode " type="text" class="form-control"></td>
                  </tr>
                </tbody>
              </tabla>
            </form>
          </div>
          <div class="modal-footer">
            <button @click.prevent.stop="onUserNew()" type="Submit" class="btn btn-secondary" data-dismiss="modal">
              New
            </button>
            <button @click.prevent.stop="onUserSave(user)" type="Submit" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div><!-- /.модальное окно-Содержание -->
      </div><!-- /.модальное окно-диалог -->
    </div><!-- /.модальное окно -->
  </div>
</template>

<script>

export default {
  name: 'HWTestTask',
  data: () => ({
    order:
      {
        type: Object,
        default: 'asc'
      },
    sortName:
      {
        type: Object,
        default: ''
      },
    user:
      {
        type: Object,
        default: {}
      },
    userAdr:
      {
        type: Object,
        default: {}
      }
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
    async onSortTitle (event) {
      try {
        this.sortName = event.target.dataset.label
        this.order = (this.order === 'asc') ? 'desc' : 'asc'
        this.users = await this.$axios.$get(`/users/?_sort=${this.sortName}&_order=${this.order}`)
      } catch (e) {
        console.log(e)
      }
    },
    onShowUser (user) {
      this.user = user
      this.userAdr = user.address
      const modal = document.querySelector('.modal')
      modal.classList.add('show')
    },
    onOff () {
      const modal = document.querySelector('.modal')
      modal.classList.remove('show')
    },
    async onUserSave (user) {
      try {
        let newUser
        if (this.user.id) {
          newUser = await this.$axios.$put(`/users/${user.id}`, user)
        } else {
          newUser = await this.$axios.$post(`/users`, user)
        }
        this.users.push(newUser)
      } catch (e) {
        console.log(e)
      }
    },
    onUserNew () {
      this.user = {
        'name': '',
        'username': '',
        'email': ''
      }
      this.userAdr = {
        'address': {
          'street': '',
          'city': '',
          'zipcode': ''
        }
      }
    }
  }
}
</script>

<style lang="scss">
  h1{
    margin: 40px 0 !important;
  }
  thead {
    cursor: pointer;
  }

  .show {
    display: block !important;
  }

  .detail {
    tbody {
      tr{
        th{
          column-width: 120px;
          label {
            margin: 10px;
          }
        }
      }
    }
  }

</style>
