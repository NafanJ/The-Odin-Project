// npm install webpack webpack-cli --save-dev

//  ./node_modules/.bin/webpack ./index.js --mode=development
// Looks for require, creates dist directory and main.js file
var moment = require('moment');

console.log("Hello from JavaScript!");  
console.log(moment().startOf('day').fromNow());