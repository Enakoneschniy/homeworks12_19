/* eslint-disable */
<template>
  <div>
  <div @click="onClose" class="bg-fade" tabindex="-1" role="dialog" aria-hidden="true">
  </div>
  <div>
  <div class="modal-dialog-add" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-center">Add user</h5>
        <button type="button" class="close" @click="onClose()" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="onSubmit()">
        <div class= "container d-flex flex-row justify-content-center">
          <div class="form-group d-flex flex-column">
            <label for="NameInput">
              Enter name
            </label>
            <input id="NameInput" required="true" v-model="newUser.name">
            <label for="UsernameInput">
              Enter username
            </label>
            <input id="UsernameInput" required="true" v-model="newUser.username">
            <label for="EmailInput" >
              Enter email
            </label>
            <input id="EmailInput" required="true" v-model="newUser.email">
          </div>
            <div class="form-group d-flex flex-column">
            <label for="StreetInput">
              Enter street
            </label>
            <input id="StreetInput" v-model="newUser.address.street">
            <label for="CompanyNameInput">
              Enter company name
            </label>
            <input id="CompanyNameInput" v-model="newUser.company.name">
            <label for="CityInput">
              Enter city
            </label>
            <input id="CityInput" v-model="newUser.address.city">
          </div>
            <div class="form-group d-flex flex-column">
            <label for="ZipcodeInput">
              Enter zipcode
            </label>
            <input id="ZipcodeInput" v-model="newUser.address.zipcode">
            <label for="PhoneInput">
              Enter phone
            </label>
            <input id="PhoneInput" v-model="newUser.phone">
            <label for="WebsiteInput" >
              Enter website
            </label>
            <input id="WebsiteInput" v-model="newUser.website">
          </div>
        </div>
        <div class="d-flex flex-direction-row justify-content-center">
          <button class="btn btn-dark" type="submit">
            Add
          </button>
        </div>
      </form>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'AddUser',
  data: () => ({
    newUser: {
      name: '',
      username: '',
      email: '',
      address: {
        street: '',
        city: '',
        zipcode: ''
      },
      phone: '',
      website: '',
      company: {
        name: ''
      }
    }
  }),
  methods: {
    onClose () {
      this.$emit('close')
    },
    onSubmit () {
      this.$emit('add', this.newUser)
    }
  }
}
</script>

<style>
  .modal-dialog-add {
      z-index: 1001;
      opacity: 100%;
      max-width: 100%;
      position: fixed;
      left: 25%;
      top: 5%;
      width: 50%;
    }
  .form-group {
      margin: 10px;
  }
  .bg-fade {
      position: fixed;
      top: 0;
      left: 0;
      background-color: black;
      opacity: 50%;
      z-index: 1000;
      width: 100vw;
      height: 100vh;
  }
</style>
