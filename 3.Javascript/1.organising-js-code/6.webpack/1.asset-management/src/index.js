import _ from "lodash";
import './style.css';
import Icon from './webpack.png'
import Data from './data.xml';
import Notes from './data.csv';
import printMe from "./print";

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
} else {  
  console.log('Looks like we are in production mode!');
}

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    element.innerHTML = _.join(['Hello', 'webpack', ':', 'Config' , 'test'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    element.appendChild(myIcon)

    console.log(Data)
    console.log(Notes)
  
    return element;
  }
  
  document.body.appendChild(component());