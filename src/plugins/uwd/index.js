export const getExtensionRoutes=(key)=>{
     // where ./../../ is the very distance to the src directory from current file
  let extensionRoutes=[];
 
  try{   extensionRoutes = require('./../../extensions/'+key+'/extension.uwd.js').default.routes  }catch(err){
    console.error('UWD: No extension routes found. Make sure extension.uwd.js exists');
    return extensionRoutes; 
  } 
  if(extensionRoutes && Array.isArray(extensionRoutes)) return extensionRoutes
}
export const getExtensionSettings=(key)=>{
  // where ./../../ is the very distance to the src directory from current file
let extensionSettings={};

try{   extensionSettings = require('./../../extensions/'+key+'/settings.uwd.json')  }catch(err){
 console.warn('UWD: No extension settings found at "'+key+'". Make sure settings.uwd.json exists');

}  
return extensionSettings; 
}
export const getRoutes=()=>{
    // where ./../../ is the very distance to the src directory from current file
    var routes =[]; 
    // Retrieve extensions 
    let extensions=getExtensions();
 
    
    // Iterate the extensions
    for (var key in extensions) {
      if (extensions.hasOwnProperty(key)) {
        routes = routes.concat(getExtensionRoutes(key));
        // let extensionRoutes;
        // try{   extensionRoutes = require('./../../extensions/'+key+'/extension.uwd.js').default.routes  }catch(err){} 
        // if(extensionRoutes && Array.isArray(extensionRoutes)) routes = routes.concat(extensionRoutes);
      }
    }
    if(routes.length===0) {
      console.error('UWD: No extension routes found.');
       return null;
    }
    return routes;
    }
export const getExtensions=()=>{
      // where ./../../ is the very distance to the src directory from current file
     // Retrieve extensions 
     let extensions; 
 
      try{  
 
        extensions = require('./../../manifest.uwd.json').extensions||{};
        //extensions = require('./../../manifest.uwd.js').default.extensions||{};
        return extensions

    }catch(err){
        console.log(err)
        console.error('UWD: Manifest not found.');
        return {};
      }
      
       
      }

export const getExtension=(name)=>{

var extension = getExtensions()[name];

extension.routes = getExtensionRoutes(name)
extension.settings = getExtensionSettings(name)

return extension


}


export const Manifest= (key=null)=>{return new class{
  constructor(){ 
  }
 
  // Getter for the full name
  get extensions() {   
    let extensions;  
    try{   
      extensions = require('./../../manifest.uwd.json').extensions||{};
      //extensions = require('./../../manifest.uwd.js').default.extensions||{};
      return extensions

  }catch(err){
      console.log(err)
      console.error('UWD: Manifest not found.');
      return {};
    }
  }
  get settings() {   
    let extensions;  
    try{   
      extensions = require('./../../manifest.uwd.json').settings||{};
      //extensions = require('./../../manifest.uwd.js').default.extensions||{};
      return extensions

  }catch(err){
      console.log(err)
      console.error('UWD: Manifest not found.');
      return {};
    }
  }
  get routes(){
    // where ./../../ is the very distance to the src directory from current file
    var routes =[]; 
    // Retrieve extensions 
    let extensions=this.extensions;
 
    
    // Iterate the extensions
    for (var key in extensions) {
      if (extensions.hasOwnProperty(key)) {
        routes = routes.concat(Extension(key).routes);
        // let extensionRoutes;
        // try{   extensionRoutes = require('./../../extensions/'+key+'/extension.uwd.js').default.routes  }catch(err){} 
        // if(extensionRoutes && Array.isArray(extensionRoutes)) routes = routes.concat(extensionRoutes);
      }
    }
    if(routes.length===0) {
      console.error('UWD: No extension routes found.');
       return null;
    }
    return routes;
    }

  // get fullExtensions(){
  // return  Object.keys(Manifest().extensions).reduce((accumulator, key) => {
  //     const extension = Extension(key);
  //     accumulator[key] = {
  //       routes: extension.routes,
  //       settings: extension.settings
  //     };
  //     return accumulator;
  //   }, {});
  // }
   
 
     
}()
} 
export const Extension= (key=null)=>{return new class{
 constructor(key){
  this.key = key;
 }
 
  get routes(){
    // where ./../../ is the very distance to the src directory from current file
  let extensionRoutes=[];
  
  try{   extensionRoutes = require('./../../extensions/'+this.key+'/extension.uwd.js').default.routes  }catch(err){
    if (process.env.REACT_APP_VERBOSE==1 )console.warn('UWD: No extension routes found at "'+this.key+'". Make sure settings.uwd.json exists and it contains the routes(array) key');

   return extensionRoutes; 
  } 
  if(extensionRoutes && Array.isArray(extensionRoutes)) return extensionRoutes
  }
  get settings(){
  // where ./../../ is the very distance to the src directory from current file
  let extensionSettings={};
  
  try{   extensionSettings = require('./../../extensions/'+this.key+'/settings.uwd.json')  }catch(err){
  if (process.env.REACT_APP_VERBOSE==1 )console.warn('UWD: No extension settings found at "'+this.key+'". Make sure settings.uwd.json exists');
  
  }  
  return extensionSettings; 
  }
  
  }(key);
}
 


 