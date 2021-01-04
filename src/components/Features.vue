<template>
  <div class="div1">
    <div>
      <div class="div3">
        <div >
          <img src="../assets/img/blood_type.png" />          
          <h2 class="text-center primary-title mt-5" >{{ $t('Features.boxSection.box1.title') }}</h2>
          <p class="text-center mt-2 font-weight-normal box-description main-section-subtitle">{{ $t('Features.boxSection.box1.description') }}</p>
        </div>
        <div >
          <img src="../assets/img/Folder.png" />          
          <h2 class="text-center primary-title mt-5" >{{ $t('Features.boxSection.box2.title') }}</h2>
          <p class="text-center mt-2 font-weight-normal box-description main-section-subtitle">{{ $t('Features.boxSection.box2.description') }}</p>
        </div>
        <div >
          <img src="../assets/img/hearth_security.png" />          
          <h2 class="text-center primary-title mt-5" >{{ $t('Features.boxSection.box3.title') }}</h2>
          <p class="text-center mt-2 font-weight-normal box-description main-section-subtitle">{{ $t('Features.boxSection.box3.description') }}</p>
        </div>
       
      </div>
    </div>
  </div>
</template>

<style scoped>

  .div1{
      z-index: 1;
      position: relative;
      padding-top: 1em;
      padding-bottom: 1em;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      text-align: center;
      background-color:#fff;
  }

  .div1 > div{
    width: 72em;
    max-width: 100%;
    margin: 0px auto;
    padding-right: 2.5em;
    padding-left: 2.5em;
  }

  .div3{
      display: grid;
      min-height: auto;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2em;
      -webkit-box-align: left;
      align-items: left;
  }
  @media (max-width: 68em){
    .div3 {
      grid-template-columns: 1fr;
    }
  }

  .div3 > div{
    text-align: center;
    font-size: 1.1rem !important;
  }

  .div3 > div > img{
    max-height: 9em !important;
    border-radius: 15px;
  }

  @media (max-width: 68em){
    .div3 > div > img{
      position: relative;
      width: 100%;
      max-width: 8em;
      height: auto;
      order: 1 !important;
      }
  }

  .main-section-title{
    font-size: 2em !important;

  }

  .main-section-subtitle{
    font-size: 1.1rem !important;
    color: rgba(42, 39, 48, 0.7)
  }
</style>