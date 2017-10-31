/**
 * Created by Administrator on 2017/10/27 0027.
 */

import _ from 'lodash';
import printMe from './print.js';
import './assets/css/style.css';
import Icon from './assets/image/sg.jpg';


function component() {
    let element = document.createElement('div');
    let btn = document.createElement('button');


    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'gg';
    btn.onclick = printMe;
    element.appendChild(btn);

    let myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);



    return element;
}

document.body.appendChild(component());