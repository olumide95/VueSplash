<template>
<div>
 <ResultBar :query="query"/>
<ImageGallery :images="images"/>
</div>
</template>

<script>
import ResultBar from './ResultBar.vue';
import ImageGallery from './ImageGallery.vue';
export default {
  name: 'Gallery',
  components:{
    ImageGallery,ResultBar
  },
  data(){
    return {
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
       this.$api.GET('/search/photos?query='+this.query+'&per_page=20')
                .then(response => {
                  console.log(response);
                  this.images = response.results;
                  this.loading = false;
                })
                .catch(e => {
                   console.log(e.data);
                });
    }
    
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
