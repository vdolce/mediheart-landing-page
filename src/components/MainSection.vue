<template>
  <div class="div1">
    <div>
      <div class="div3">
        <div>
          <h1 class="main-section-title secondary-title text-wrap">{{ $t('MainSection.title.part1') }} <br> {{ $t('MainSection.title.part2') }}</h1>        
          <p class="main-section-subtitle"> {{ $t('MainSection.subtitle.part1') }} <br> {{ $t('MainSection.subtitle.part2') }} </p>
        </div>

        <div class="img-div">
          <img src="../assets/img/final_landing_img.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  .div1{
    z-index: 1;
    position: relative;
    padding-top: 4em;
    padding-bottom: 4em;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    background-color: #fff;
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
      grid-template-columns: 31em auto;
      gap: 2em;
      -webkit-box-align: center;
      align-items: center;
  }
  @media (max-width: 68em){
    .div3 {
      grid-template-columns: 1fr;
    }
  }

  .div3 > div > img{
    max-height: 19em !important;
    border-radius: 15px;
  }
  @media (max-width: 68em){
    .div3 > .img-div{
      order: 1;
    }
    .div3 > div > img{
      position: relative;
      width: 100%;
      max-width: 31em;
      height: auto;
      order: 1 !important;
      }
  }


  .main-section-title{
    font-size: 2.5em !important;
    text-align: left;
  }

  .main-section-subtitle{
    font-size: 1.5rem !important;
    color: rgba(42, 39, 48, 0.7);
    text-align: left;
  }

  @media (max-width: 68em){
    .main-section-title{
      font-size: 2.3rem !important;
      text-align: center;
    }

    .main-section-subtitle{
      font-size: 1.3rem !important;
      text-align: center;
    }

  }


</style>