<template>
  <div >
    <!-- TOOLBAR -->
    <HomepageToolbar/>
   
    <MainSection/>
    <PersonalInfoDemo/>    
    <Features/>    


    <!-- FOOTER -->
    <Footer />

  </div>
</template>

<script>
import HomepageToolbar from '../components/HomepageToolbar'
import MainSection from '../components/MainSection'
import PersonalInfoDemo from '../components/PersonalInfoDemo'
import Features from '../components/Features'
import Footer from '../components/Footer'


  export default {
    name:"LandingPage",
    components:{
      HomepageToolbar,
      MainSection,
      PersonalInfoDemo,
      Features,
      Footer,
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
