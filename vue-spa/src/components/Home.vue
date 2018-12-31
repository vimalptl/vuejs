<template>
<div class="home">

    <section class="main-section section">
      <div class="container content">
          <p> Home </p>
      </div>
    </section>

</div>
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

export default {
  name: 'home',
  components: {
    'app-header' : AppHeader,
    'app-footer' : AppFooter
  }
}


</script>

<style>

</style>
