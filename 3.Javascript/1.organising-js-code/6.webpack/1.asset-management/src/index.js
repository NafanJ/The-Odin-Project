import _ from "lodash";
import './style.css';
import Icon from './webpack.png'
import Data from './data.xml';
import Notes from './data.csv';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack', ':', 'Config' , 'test'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon)

    console.log(Data)
    console.log(Notes)
  
    return element;
  }
  
  document.body.appendChild(component());