
const { setJsonKey } = require('../utils');
require('dotenv').config();
console.log("PRESTART");
try{
    // set homepage
    setJsonKey('./package.json', 'homepage', '.'); 
    console.log('homepage set to ','.' );
}catch(error){
console.log(error)
}


 