import React from "react";
 import {Extension, Manifest} from '../../../plugins/uwd'
  
 const Block = ({title,example,output}) => {
   
    return (
    <div>
    <h1>{title}</h1>
    Example: 
    <pre>{example} </pre>
    Output: 
    <pre>{output}</pre>
    </div>);
 }
const Home = (props) => {

    return ( <>
       Dev Test
       <Block title={"Manifest extensions"} example={"Manifest().extensions"} output={JSON.stringify( Manifest().extensions, null,2)}/>
       <Block title={"Manifest routes"} example={"Manifest().routes"} output={JSON.stringify( Manifest().routes, null,2)}/>
       <Block title={"Manifest settings"} example={"Manifest().settings"} output={JSON.stringify( Manifest().settings, null,2)}/>
        <br/>
       <Block title={"Extension routes"} example={"Extension('localization').routes"} output={JSON.stringify( Extension('localization').routes, null,2)}/>

       <Block title={"Extension settings"} example={"Extension('localization').settings"} output={JSON.stringify( Extension('localization').settings, null,2)}/>

       <Block title={"Iterate extensions"} example={` 
    Object.keys(Manifest().extensions).reduce((accumulator, key) => {
    const extension = Extension(key);
    accumulator[key] = {
      routes: extension.routes,
      settings: extension.settings
    };
    return accumulator;
  }, {});
       `} output={JSON.stringify( Object.keys(Manifest().extensions).reduce((accumulator, key) => {
        const extension = Extension(key);
        accumulator[key] = {
          routes: extension.routes,
          settings: extension.settings
        };
        return accumulator;
      }, {}), null,2)}/>

     
 
 </>)

}

export default Home