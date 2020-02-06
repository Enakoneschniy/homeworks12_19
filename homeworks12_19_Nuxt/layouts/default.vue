<template>
  <div>
    <TheHeader />
    <nuxt />
  </div>
</template>
<script>
import TheHeader from '../components/TheHeader'
export default {
  name: 'Default',
  components: { TheHeader }
}
</script>
