<template>
  <v-app id="inspire">
    
    <router-view></router-view>
    

  </v-app>
</template>

<script>



  export default {
    name:"app",
    components:{
      
    },

    props: 
        {
      source: String,
    },
    data: () => ({
      
         
      
    }),

  }
</script>

<style>
  html{
    overflow-y: auto;
  }
</style>
