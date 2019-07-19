<template>
 
<div>
<!--  search box -->
<div class="main">
    <div class="search">
        <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input type="text" class="form-control" placeholder="Search for photo">
        </div>
    </div>
</div>
 </div>
</template>

<script>
export default {
  name: 'searchBar',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Styles for wrapping the search box */

.main {
    width: 100%;
    height: 200px;
    background-color: #dde2e9;
 
}

.search{
 width: 80%;
 padding-top:  6%;
 margin: 0 auto;
}
/* Bootstrap 4 text input with search icon */

.has-search .form-control {
  
    padding-left: 2.375rem;
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}
</style>
