<template>
 <div>
<section class="gallery">

  <div class="row">
    <div class="col-md-4" v-on:click="showImage(image.urls.full,image.user.first_name+' '+image.user.last_name,image.user.location)" v-for="image in images" :key="image.id" >
      <ImageCard  :name="getName(image.user)" :location="image.user.location" :image="image.urls.regular" :width="image.width" :height="image.height"/>
      
    </div>  
 
  </div>
 
</section>
<LightBox :currentImage="currentImage" :imageName="imageName" :imageLocation="imageLocation"  />

</div>
</template>

<script>
import ImageCard from './ImageCard.vue';
import LightBox from './LightBox.vue';
export default {
  name: 'Gallery',
  components:{
    ImageCard,LightBox
  },
  data(){
      return {
      currentImage : '',
      imageName :'',
      imageLocation : ''
      }
  },
  props:{
      images:{
          type:Array,
          required:true,
          default: []
      }
  },


  methods: {
      showImage(image,name,location){
      this.currentImage = image
      this.imageName = name
      this.imageLocation = location
      this.$modal.show('modal');
      },
      getName(user){
          return user.first_name+' '+ ((user.last_name) ? user.last_name : '');
      }
  },
  
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.gallery {
margin-top: -2%;
margin-left: 20%;
margin-right: 20%;
}

</style>
