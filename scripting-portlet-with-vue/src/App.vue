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

</style>

