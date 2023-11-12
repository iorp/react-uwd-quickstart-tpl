const fs = require('fs');
console.log("POSTBUILD");
try{
fs.copyFileSync('.htaccess', './build/.htaccess');
console.log('.htaccess copied to ./build');
}catch(error){
    console.log(error)
    }