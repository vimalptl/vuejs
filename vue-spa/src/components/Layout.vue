<template>
<div class="layout">
    <section class="footer-section">
    <app-header></app-header>
    </section>
    <section class="main-section section">
      <div class="container content">
        <category></category>
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
import Category from './Category.vue';
export default {
  name: 'Layout',
  props: {
    msg: String
  },
  components: {
    'app-header' : AppHeader,
    'app-footer' : AppFooter,
    'category' : Category
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
