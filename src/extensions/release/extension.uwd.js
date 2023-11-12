 
  const extension ={
    routes : [
      { path: '/', element: require('./site/pages/Home').default },
      { path: '/about', element: require('./site/pages/About').default }
    ]
   }
  export default extension