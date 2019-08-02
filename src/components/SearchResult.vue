<template>
<div>
 <ResultBar :query="query"/>
<section class="gallery">

  <div class="row">
    <div class="col-md-4" v-on:click="showImage(image.urls.full,image.user.first_name+' '+image.user.last_name,image.user.location)" v-for="image in images" :key="image.id" >
      <ImageCard  :name="image.user.first_name+' '+image.user.last_name" :location="image.user.location" :image="image.urls.regular"/>
      
    </div>  
 
  </div>
 
</section>

<modal  width="800px" height="500px" name="login-modal" @opened="modalOpened" @before-close="beforeClose">

<div class="row">
<div class="col-md-12">
<img :src="currentImage" class="modal__image">

</div>
<div class="col-md-12">
<diV class="image__details">
<h1 > {{imageName}} </h1>
<p>{{imageLocation}}</p>
</diV>


</div>

</div>

</modal>
<i class="fa fa-times closemodal" v-show="modalOpen"></i>
</div>
</template>

<script>
import ResultBar from './ResultBar.vue';
import ImageCard from './ImageCard.vue';
import Placeholder from './Placeholder.vue';
import axios from 'axios';
export default {
  name: 'Gallery',
  components:{
    ImageCard,Placeholder,ResultBar
  },
  data(){
    return {
      API: 'https://api.unsplash.com/',
      ACCESS_KEY: 'bb4b552fa6df0336cce8a2bcb5b4abdbcc4ca92b80082f1ac0e807e998e185c4',
      images:[],
      query:this.$route.query.q,
      loading:true,
      currentImage:'',
      imageName:'',
      imageLocation:'',
      modalOpen:false
    }
  },

  mounted(){

    this.getImages();
    
  },
  methods:{
    modalOpened(event){
      this.modalOpen = true
    },
     beforeClose (event) {
    this.modalOpen = false
    },
    showImage(image,name,location){
      this.currentImage = image
      this.imageName = name
      this.imageLocation = location
      this.$modal.show('login-modal');
    },
    getImages(){
       axios.get(this.API+'/search/photos?query='+this.query+'&per_page=20&client_id='+this.ACCESS_KEY)
                .then(response => {
                  console.log(response.data);
                  this.images = response.data.results;
                  this.loading = false;
                })
                .catch(e => {
                   console.log(e.response.data);
                });
    }
    
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
[v-cloak] {
  display: none;
}
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

.closemodal{
right: 12%;
top: 7%;
position: absolute;
z-index: 100000;
color: white;
}
.modal__image{
  width: 100%;
  height: 400px;
  object-fit: cover;
  
}

.image__details{
  margin:2% 5%;
}

.image__details > h1{
  font-size:25px
}

.image__details > p{
  font-style:bolder
}
.gallery {
margin-top: -2%;
margin-left: 20%;
margin-right: 20%;
}

.v--modal-overlay .v--modal-box {
    border-radius: 10px;
}


</style>
