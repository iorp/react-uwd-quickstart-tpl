import React, { useState, useEffect ,useContext} from 'react';

 import  {Router,DataWrapper} from './plugins/uwd/components'
import  {getRoutes} from './plugins/uwd'


import {DataContextProvider,DataContext} from './contexts/DataContext'
import { LanguageContextProvider ,LanguageContext} from './contexts/LanguageContext'; 


const App = ()=>{

  return (
    <DataContextProvider> 
    <LanguageContextProvider defaultLanguage="fr">
  {/* <DataWrapper children={  }/> */}
    <Router basename={process.env.REACT_APP_ROUTER_BASENAME} routes={getRoutes()}/>

  </LanguageContextProvider>
  </DataContextProvider> )

} 








export default App;
 