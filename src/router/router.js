export default [
    { 
      path: '/',
      name: 'landing-page',    
      component: () => import("@/views/LandingPage"),
    },
    { 
      path: '*',
      name: 'page-not-found',    
      component: () => import("@/views/PageNotFound")    
    }

];
  
