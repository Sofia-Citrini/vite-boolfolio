<script>
import Navbar from "./components/Navbar.vue";

export default {
  components:{Navbar},
  data() {
    return {
      
    }
  },
}
</script>

<template>
  
  <header>
    <Navbar></Navbar>
  </header>

  <main>
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
  
</template>

<style lang="scss">
@use 'styles/main.scss';

</style>
