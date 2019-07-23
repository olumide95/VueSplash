<template>
 
<div>
<!--  search box -->
<div class="main">
    <div class="search">
       
        <h1 style="text-align:left">Searching for <q class="query" >{{query}}</q></h1>
       
    </div>
</div>
 </div>
</template>

<script>
export default {
  name: 'searchBar',
    
  props:{
     query: {
      type: String,
    }
 }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Styles for wrapping the search box */
.query{
    color:#C9D0E0;
}
</style>
