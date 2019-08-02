<template>   

   <div class="skeleton-container">
     <skeleton-loading >
            <row :gutter="{top: height}">
              <square-skeleton 
                    :count="1"
                    :boxProperties="{
                        bottom: '0px',
                        width: '100px'

                    }" 
                >
                </square-skeleton>
                <square-skeleton 
                    :count="1"
                    :boxProperties="{
                      top: '10px',
                        bottom: '0px',
                        width: '50px'

                    }" 
                >
                </square-skeleton>
            </row>
          
        </skeleton-loading>
      </div>
        

</template>

<script>

export default {
  name: 'Placeholder',
  data(){
    return{

    
    }
  },
  props:{
    height:{
      type: String,
      required:true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.skeleton-container{

  background-color: whitesmoke;
  padding: 25px;
   margin-bottom: 15%; 
}

</style>
