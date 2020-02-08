<template>
  <tr>
    <td>
      {{ user.name }}
    </td>
    <td>
      {{ user.username }}
    </td>
    <td>
      {{ user.email }}
    </td>
    <td>
      <button @click="onShowInfo" class="btn btn-info">
        Info
      </button>
    </td>
    <td>
      <button @click="onRemoveUser" class="btn btn-danger">
        Remove
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'UserListItem',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    onRemoveUser () {
      this.$emit('remove', this.user)
    },
    onShowInfo () {
      this.$emit('showInfo', this.user)
    }
  }
}
</script>
