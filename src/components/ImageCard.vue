<template>
<div>
<!-- BEGIN: card -->
  <div class="imagecard" data-effect="zoom"  v-images-loaded:on.progress="loading" v-show="!isLoading">
  
      <figure  class="card__image">
      <img :src="image"  alt="Short description" >
      </figure>

      <div class="card__body">
      
      <p class="card__bio">{{name}}</p>
      </div>
      <div class="card__footer">
          <br>
      <span class="card__date">{{location}}</span>
      
      </div>

  </div>

        
  <!-- END: card -->
<Placeholder v-show="isLoading" :height="placeholderHeight"/>

</div>
</template>

<script>

import Placeholder from './Placeholder.vue';
import imagesLoaded from 'vue-images-loaded'
export default {
  directives: {
        imagesLoaded
    },
  components:{
    Placeholder
  },
  data(){
    return{
      isLoading: true,
    }
  },
  name: 'Gallery',
    props:{
        image: {
          type: String,
          required: true
        },
        name: {
          type: String,
          required: true
        },
        location: {
          type: String,
        },
        height: {
          type: Number,
        },
        width: {
          type: Number,
        }
    },
    computed:{
      placeholderHeight(){
        let factor = (this.width/this.height) *50
        console.log((this.height/factor).toFixed(2)+'px'); 
        return (this.height/20).toFixed(2)+'px'; 
      }
    },
    methods: {
        loading(instance, image ) {
            if(image.isLoaded){
              this.isLoading= false;
            
            }
         
       },
        
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.imagecard {
  position: relative;
  margin-bottom: 15%; 
  grid-area: card;
  align-self: center;
  justify-self: center;
  overflow: hidden;
  display: block;
  width: 100%;
  max-width: 250px;
  font-size: var(--fontOrigin);
  border-radius: 8px;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  -webkit-transition: all var(--speed) ease;
  transition: all var(--speed) ease;
  
}

.imagecard:hover {
  
  box-shadow: 0 15px 48.75px rgba(0, 0, 0, 0.6);
  -webkit-transform: scale(1.1, 1.1);
  transform: scale(1.1, 1.1);
}


.card__image {
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 8), rgba(0, 0, 0, 0.8));
  
}
.card__image:after {
    content: '\A';
    position: absolute;
    width: 100%; height:100%;
    top:0; left:0;
     background: linear-gradient(
    rgba(0, 0, 0, .5),
    rgba(0, 0, 0, .1)), 100% / cover fixed;
    opacity: 1;
    transition: all 1s;
    -webkit-transition: all 1s;
}
.card__image img {
  
  -webkit-transform: scale(1.3, 1.3);
  transform: scale(1.3, 1.3);
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  
}



.card__body {
  padding: 0 20px;
}


.card__bio {
 
  text-align: left;
  position: relative;
  -webkit-transform: translateY(30%);
  transform: translateY(30%);
  display: block;
  margin-top: -80px;
  font-size: var(--fontMedium);
  font-weight: var(--fontRegular);
  /*text-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.35);*/
  color: rgba(255, 255, 255, 0.9);
  opacity: 1;
  -webkit-transition: all var(--speed) ease;
  transition: all var(--speed) ease;
}

.imagecard:hover .card__bio {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
}

.card__footer {
  position: relative;
  -webkit-transform: translateY(60%);
  transform: translateY(60%);
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-areas: "date category";
  padding: 0px 20px;
  opacity: 1;
  -webkit-transition: all var(--speed) ease;
  transition: all var(--speed) ease;
}

.imagecard:hover .card__footer {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
}


.card__date {
  margin-top:-8%;
  grid-area: date;
  display: inline-block;
  align-self: left;
  justify-self: left;
  font-size: var(--fontSmall);
  font-weight: var(--fontRegular);
  text-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.2);
  color: rgba(250, 250, 250);
}

/* MODIFIERS */
.imagecard[data-effect="blur"]:hover .card__image img {
  -webkit-filter: blur(3px);
  filter: blur(3px);
}

.imagecard[data-effect="blur"] .card__image img {
  animation-name: blur;
}

.imagecard[data-effect="color"]:hover {
  -webkit-transform: scale(1, 1);
  transform: scale(1, 1);
  box-shadow: 0 40px 260px rgba(255, 0, 0, 0.1), 0 40px 130px rgba(250, 100, 100, 0.2), -80px -40px 230px rgba(0, 200, 250, 0.15), 80px 40px 230px rgba(120, 120, 255, 0.15);
}

.imagecard[data-effect="color"] .card__image {
  background: linear-gradient(to bottom, rgba(20, 20, 100, 1), rgba(255, 100, 100, 0.5))
}

.imagecard[data-effect="color"]:hover .card__image img {
  opacity: 0.8;
}


</style>
