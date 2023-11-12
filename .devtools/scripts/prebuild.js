
const { setJsonKey } = require('../utils');
require('dotenv').config();
console.log("PREBUILD");

try{
    // set homepage
    setJsonKey('./package.json', 'homepage', process.env.REACT_APP_ROUTER_BASENAME); 
    console.log('homepage set to ',process.env.REACT_APP_ROUTER_BASENAME );
}catch(error){
console.log(error)
}

  
