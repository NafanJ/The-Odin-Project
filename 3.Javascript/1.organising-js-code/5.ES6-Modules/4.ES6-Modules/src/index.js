// import your function
import myName from './myName';
// index.js in /src folder
import {functionOne, functionTwo} from './myModules';

function component() {
  const element = document.createElement('div');

  // use your function!
  //element.textContent = myName('Cody');
  element.textContent = functionOne();
  return element;
}

document.body.appendChild(component());