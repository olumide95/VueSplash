<template>
<div>
<modal  width="900px" height="600px" name="modal" @opened="modalOpened" @before-close="beforeClose" :clickToClose="false">

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
<img src="../assets/icons/cross-out.svg" width="1%" class="closemodal" v-show="modalOpen" @click="$modal.hide('modal')">
</div>
</template>

<script>

export default {
  name: 'LightBox',
  data(){
      return {
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
      this.modalOpen = true
    },
     beforeClose (event) {
    this.modalOpen = false
    },
    
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.closemodal{
right: 12%;
top: 4%;
position: fixed;
z-index: 10000;
}
.modal__image{
  width: 100%;
  height: 500px;
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
