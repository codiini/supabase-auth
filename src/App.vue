<template>
  <div>
    <Nav />
  </div>
  <router-view/>
</template>

<style>

</style>

<script>
import Nav from './components/Nav.vue'
export default {
  components: { Nav },
  
}
</script>