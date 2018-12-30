<template>
<div class="home">
    <section class="header-section">
    <app-header></app-header>
    </section>
    <section class="main-section section">
      <div class="container content">
          <p> Home </p>
      </div>
    </section>
    <section class="footer-section">
    <app-footer></app-footer>
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
