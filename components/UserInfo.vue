<template>
      <div>
  <div @click="onClose" class="bg-fade" tabindex="-1" role="dialog" aria-hidden="true">
  </div>
  <div>
  <div class="modal-dialog-info" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-center">User Info</h5>
        <button type="button" class="close" @click="onClose" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <table class="table user-table">
          <tbody>
            <tr>
              <strong>Name:</strong> {{ currentUser.name }}
            </tr>
            <tr>
              <strong>Username:</strong> {{ currentUser.username }}
            </tr>
            <tr>
              <strong>Email:</strong> {{ currentUser.email }}
            </tr>
            <tr>
              <strong>City:</strong> {{ currentUser.address.city }}
            </tr>
            <tr>
              <strong>Street:</strong> {{ currentUser.address.street }}
            </tr>
            <tr>
              <strong>Website:</strong> {{ currentUser.website }}
            </tr>
            <tr>
              <strong>Phone:</strong> {{ currentUser.phone }}
            </tr>
            <tr>
              <strong>Company:</strong> {{ currentUser.company.name }}
            </tr>
          </tbody>
        </table>
        <div class="d-flex flex-direction-row justify-content-center">
          <button
          @click="onClose"
          class="btn btn-dark">
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    currentUser: {
      type: Object,
      required: true
    }
  },
  methods: {
    onClose () {
      this.$emit('close')
    }
  }
}
</script>

<style>
  .modal-dialog-info {
      z-index: 1001;
      opacity: 100%;
      position: fixed;
      width: 33%;
      left: 33%;
      top: 5%;
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
