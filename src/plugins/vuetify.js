import Vue from 'vue';
import Vuetify from 'vuetify/lib';

export default new Vuetify({
    theme: {
        themes: {
          light: {        
            primary: '#0097a7',
            secondary: '#ec407a',
            // accent: '#00bcd4',
            error: '#EF5350',
            // warning: '#E57373',
            // info: '#607d8b',
            // success: '#4caf50',
             background:'#ffffff'    
          },
          
          dark:{
            primary: '#ec407a',
            secondary: '#b4004e',
            // accent: '#00bcd4',
            // error: '#E53935',
            // warning: '#ffc107',
            // info: '#607d8b',
            // success: '#4caf50',
            // background:'#303F9F' 
          }
        },
      },
  })

  Vue.use(Vuetify);