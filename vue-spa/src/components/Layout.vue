<template>
  <div>
    <app-header></app-header>
    <h1>{{ msg }}</h1>
    <p>

    </p>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

export default {
  name: 'Layout',
  props: {
    msg: String
  },
  components: {
    'app-header' : AppHeader,
    'app-footer' : AppFooter
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
