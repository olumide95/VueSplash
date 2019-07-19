<template>
  <div id="app">
  
    <SearchBar />
    <Gallery />
  </div>
</template>

<script>

import SearchBar from './components/SearchBar.vue'
import Gallery from './components/Gallery.vue'

export default {
  name: 'app',
  components: {
    SearchBar,Gallery
  }
}
</script>


<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
