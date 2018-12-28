  <template>

    <Layout msg="Welcome to Your Vue.js App"/>

</template>

<script>
import Layout from './components/Layout.vue'

export default {
  name: 'app',
  components: {
    Layout
  }
}
</script>

<style lang="scss">
/* App deployed on WebPortal center's the to menu, override style to add width 100% */
  .container-fluid {
    margin-right: auto;
    margin-left: auto;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
  }
</style>
