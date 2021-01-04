<template>
  <div class="div1">
    <div>
      <div class="div3">
        <div class="img-div">
          <img src="../assets/img/personal-info-demo.png" />
        </div>
        
        <div>
          <h3 class="intermediate-title">{{ $t('PersonalInfoDemo.intermediateSection.title') }}</h3>
          <p class="intermediate-subtitle"> {{ $t('PersonalInfoDemo.intermediateSection.subtitle') }} </p>
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
    background-color: rgb(160 39 79);
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
    grid-template-columns: 41em auto;
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
    max-width: 44em;
    height: auto;
    order: 1 !important;
    }
}

.intermediate-title{
  font-size:30px !important;
  color: #fff;
}

.intermediate-subtitle{
  font-size:18px !important;
  color: rgba(255, 255, 255, 0.6)
}

</style>