<template>
  <div class="div1">
    <div>
      <div class="div3">
        <div >
          <span class="white--text">&copy; Digiclover.net</span>
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
    background-color:#0097a7;
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
    grid-template-columns: auto;
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
  text-align: left;
  font-size: 1.1rem !important;
}

</style>