<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="css">
  @import "./resources/fonts/Roboto-mono/font.css";

  @import "./resources/fonts/Roboto-usual/roboto-black/font.css";
  @import "./resources/fonts/Roboto-usual/roboto-bold/font.css";
  @import "./resources/fonts/Roboto-usual/roboto-medium/font.css";
  @import "./resources/fonts/Roboto-usual/roboto-regular/font.css";
</style>
