import React, { useState, useEffect ,useContext} from 'react';
import {DataContext} from './../../../contexts/DataContext'
import { LanguageContext} from './../../../contexts/LanguageContext'; 
  
  export  const Router = ({basename,routes}) => {
    const NotFound = () => (
        <div>
          <h1>404 - Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
        </div>
      ); 


       
    const [currentPath, setCurrentPath] = useState(getCurrentPath());
  
    
  
  
  
  
    useEffect(() => {
      const handlePopstate = () => {
        setCurrentPath(getCurrentPath());
      };
  
      window.addEventListener('popstate', handlePopstate);
  
      return () => {
        window.removeEventListener('popstate', handlePopstate);
      };
    }, []);
  
    function getCurrentPath() {
      const pathname = window.location.pathname;
      // const basename = '/TrueGrains/template-super-router-react/build'; // Replace with your basename
      const trimmedPath = pathname.startsWith(basename) ? pathname.slice(basename.length) : pathname;
      return trimmedPath || '/';
    }
  
    console.log(currentPath)
    const currentRoute = routes.find(route => route.path === currentPath);
    const ElementToRender = currentRoute ? currentRoute.element : NotFound;
  
    return (
      <div>
        <ElementToRender />
      </div>
    );
  };
  

 

export const DataWrapper = ({children}) => {
    /**
     * 
     *  Usage, this is a model for future data operations
     * 
     *   <DataWrapper children={
        <Router basename={process.env.REACT_APP_ROUTER_BASENAME} routes={getRoutes()}/>
      }/>
    
    
     */
      const api = 'http://localhost/TrueGrains/api/index.php'
      // initialize data 
      const { contextData, setContextData } = useContext(DataContext);
      const [error, setError] = useState(null);  
      const { selectedLanguage,setSelectedLanguage, translations, updateTranslations } = useContext(LanguageContext);
      //const retrieveData = false
      useEffect(() => { 
       
      //  if(retrieveData){
        fetch(api, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            $:'/test',
            auth:window.location.search
          }),
        })
          .then((response) => response.json())
          .then((response) => { 
             
            if(response.error) {
              setError({message:response.error})
            }else{
       
            setContextData({ ...response,...{api:api}});
        
            console.log(response);  
          }
          })
          .catch((error) => {
            console.error('POST request failed:', error);
            setError({message:error})
          });
    
        // }else{
        //   setContextData(contextData)
    
        // }
    
    
      
      }, []);  
    
      return (
         
        <>
    
          {error ? <div>Error: {error.message }</div> : contextData ? (
            // todo here comes the navigation
            <div> 
            {/* <p>{JSON.stringify(contextData,null,2)}</p> */}
            {children}
            
            </div>
       
          ) : (
            <div>Loading...</div>
            
          )}
         </>
      );
    }; 
    
  export default {}