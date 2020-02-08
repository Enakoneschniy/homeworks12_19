<template>
  <div>
    <TheHeader />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '../components/theHeader'
export default {
  name: 'Default',
  components: { TheHeader }
}

</script>
