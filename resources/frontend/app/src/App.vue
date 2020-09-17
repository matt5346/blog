<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="css">
  @import "./resources/fonts/Roboto-mono/font.css";

  @import "./resources/fonts/Roboto-usual/roboto-black/font.css";
  @import "./resources/fonts/Roboto-usual/roboto-bold/font.css";
  @import "./resources/fonts/Roboto-usual/roboto-medium/font.css";
  @import "./resources/fonts/Roboto-usual/roboto-regular/font.css";
</style>
