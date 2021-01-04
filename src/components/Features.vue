<template>
<div class="v-responsive container mx-auto" style="width: 1200px;">
  
  <v-row>
    <!-- box 1 -->
    <v-col cols="12" md="4" sm="12"  xs="12">
      <v-card
        class="ma-3 pa-6"                  
        tile
        flat
        align="center"
        justify="center"                
      >                  
        <div>
          <v-img :src="require('@/assets/img/blood_type.png')" :contain="true" max-height="190px" max-width="190px"></v-img>
        </div>                  
        <h2 class="text-center primary-title mt-5" >{{ $t('Features.boxSection.box1.title') }}</h2>
        <p class="text-center mt-2 font-weight-normal box-description main-section-subtitle">{{ $t('Features.boxSection.box1.description') }}</p>
      </v-card>            
    </v-col>

    <!-- box 2 -->
    <v-col cols="12" md="4" sm="12" xs="12">
      <v-card                 
        class="ma-3 pa-6"
        tile
        flat
        align="center"
        justify="center"
      >
        <div >
          <v-img :src="require('@/assets/img/Folder.png')" :contain="true" max-height="185px" max-width="185px"></v-img>
        </div>
        <h2 class="text-center primary-title mt-5" >{{ $t('Features.boxSection.box2.title') }}</h2>
        <p class="text-center mt-2 font-weight-normal box-description main-section-subtitle">{{ $t('Features.boxSection.box2.description') }}</p>
      </v-card>            
    </v-col>

    <!-- box 3 -->
    <v-col cols="12" md="4" sm="12"  xs="12">
      <v-card
        class="ma-3 pa-6"                  
        tile
        flat
        align="center"
        justify="center"
      >
        <div>
          <v-img :src="require('@/assets/img/hearth_security.png')" :contain="true" max-height="200px" max-width="200px"></v-img>
        </div>
        <h2 class="text-center primary-title mt-5" >{{ $t('Features.boxSection.box3.title') }}</h2>
        <p class="text-center mt-2 font-weight-normal box-description main-section-subtitle">{{ $t('Features.boxSection.box3.description') }}</p>
      </v-card>            
    </v-col>
  </v-row>

</div>
</template>

<style scoped>
  .main-section-title{
    font-size: 2em !important;

  }

  .main-section-subtitle{
    font-size: 1.1rem !important;
    color: rgba(42, 39, 48, 0.7)
  }
</style>