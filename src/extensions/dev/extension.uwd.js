  const extension ={

    routes: [
      { path: '/dev', element: require('./pages/Home').default },
      { path: '/dev/test', element: require('./pages/Test').default }
    ]
  }
  export default extension