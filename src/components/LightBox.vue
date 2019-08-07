<template>
<div>


<modal  width="1000px" height="650px" name="modal" @opened="modalOpened" @before-close="beforeClose" :clickToClose="false">
 <loading :active.sync="isLoading" :is-full-page="false" color="#2c3e50"></loading>
      <div class="row">

        <div class="col-md-12">
        
          <img :src="currentImage" class="modal__image" v-images-loaded:on.progress="loading" v-show="!isLoading">
          <div class="modal__image" v-show="isLoading"> </div>
        </div>

        <div class="col-md-12">
          <diV class="image__details">
              <h1 > {{imageName}} </h1>
              <p>{{imageLocation}}</p>
          </diV>
        </div>

      </div>

</modal>
<img src="../assets/icons/cross-out.svg" width="1%" class="closemodal" v-show="modalOpen" @click="$modal.hide('modal')">
</div>
</template>

<script>
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import imagesLoaded from 'vue-images-loaded'
export default {
  name: 'LightBox',
  directives: {  imagesLoaded  },
  components:{  Loading },
  data(){
      return {
          isLoading: true,
          modalOpen:false
      }
  },
  props:{
      currentImage:{
          type:String,
          
      },
      imageName:{
          type:String,
          
      },
      imageLocation:{
          type:String,
         
      },
  },
  methods:{
    modalOpened(event){
      this.modalOpen = true;
      this.isLoading= true;
    },
     beforeClose (event) {
    this.modalOpen = false;
    },
    loading(instance, image ) {
        if(image.isLoaded){
            this.isLoading= false;
        
        }   
    },
    
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.closemodal{
right: 10%;
top: 2%;
position: fixed;
z-index: 10000;
}
.modal__image{
  width: 100%;
  height: 550px;
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


.v--modal-overlay .v--modal-box {
    border-radius: 10px;
}

</style>
