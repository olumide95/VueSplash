<template>

<section class="gallery">

  <div class="row">
    <div class="col-md-4" v-for="image in images" :key="image.id">
      <ImageCard  :image="image"/>
      
    </div>
  </div>
 
</section>

</template>

<script>
import ImageCard from './ImageCard.vue';
import axios from 'axios';
export default {
  name: 'Gallery',
  components:{
    ImageCard
  },
  data(){
    return {
      API: 'https://api.unsplash.com/',
      ACCESS_KEY: 'bb4b552fa6df0336cce8a2bcb5b4abdbcc4ca92b80082f1ac0e807e998e185c4',
      images:[]
    }
  },

  monted(){

    this.getImages();

  },
  methods:{
    
    getImages(){
       axios.post(this.API+'/photos?client_id='+this.ACCESS_KEY, {
                  email: this.email,
                  phone: this.phone,
                  name: this.name,
                })
                .then(response => {
                  console.log(response);
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

.gallery {
margin-top: -2%;
margin-left: 20%;
margin-right: 20%;
}


</style>
