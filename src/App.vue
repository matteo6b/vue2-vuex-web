<template>
  <div id="app">
    <headers  v-if="$store.getters['auth/isAuthenticated']"  ></headers>
    <router-view></router-view>
  </div>
</template>

<script>
import headers from './components/header';

export default {
  name: 'app',
  components: {
    headers,
  },
};
</script>

<style>
#app {
  text-align: center;
}
</style>
