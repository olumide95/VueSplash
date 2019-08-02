<template>
 <div>
 <SearchBar />
<ImageGallery :images="images"/>

</div>
</template>

<script>
import SearchBar from './SearchBar.vue'
import ImageGallery from './ImageGallery.vue';
export default {
  name: 'Landing',
  components:{
    SearchBar,ImageGallery
  },
  data(){
    return {
      images:[],
      
    }
  },

  mounted(){

    this.getImages();

  },
  methods:{
    
    getImages(){
       this.$api.GET('/search/photos?page=1&query=African&per_page=8')
                .then(response => {
                  console.log(response);
                  this.images = response.results;
                })
                .catch(e => {
                   console.log(e.response);
                });
    }
    
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

/* GLOBAL VARIABLES */
:root {
  --font: "Roboto", sans-serif;
  --fontOrigin: 1rem;     /* 16px */
  --fontSmall: 0.625em;   /* 10px */
  --fontMedium: 0.9em;  /* 14px */
  --fontNormal: 1em;      /* 16px */
  --fontLarge:  1.375em;  /* 22px */
  --fontLight: 100;
  --fontRegular: 400;
  --speed: 0.65s;
}

@keyframes zoom {
  from {
    object-position: 0 50%;
  }
  to {
    object-position: 100% 50%;
  }
}

@keyframes blur {
  from {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
  to {
    -webkit-transform: scale(1.5, 1.5);
    transform: scale(2, 2);
  }
}

* {
  border: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font);
  font-weight: var(--fontOrigin);
  font-size: 1rem;
  line-height: 1.2;
  letter-spacing: 0.005rem;
  -webkit-font-smoothing: subpixel-antialiased;
  font-smoothing: subpixel-antialiased;
}



</style>
