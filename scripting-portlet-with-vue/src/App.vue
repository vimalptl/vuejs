<template>
    <div class="container" id="app">
        <!--<img alt="Vue logo" src="./assets/logo.png">-->
        <LibrariesList></LibrariesList>
    </div>
</template>

<script>
  import LibrariesList from './components/LibrariesList.vue';

  export default {
    name: 'app',
    components: {
      LibrariesList,
    },
  };
</script>

<style lang="scss">
    #app {
        /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
        /*-webkit-font-smoothing: antialiased;*/
        /*-moz-osx-font-smoothing: grayscale;*/
        /*!*text-align: center;*!*/
        /*color: #2c3e50;*/
        /*margin-top: 60px;*/
    }
</style>

