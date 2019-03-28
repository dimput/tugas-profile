import React from 'react';
import {NavLink} from 'react-router-dom';
import BG from './bgsidenav.png';

const Navdraw = () => {
    return(
    <ul id="mobile-demo" class="sidenav">
        <li><div class="user-view">
            <div class="background">
                <img src={BG} alt="wow" width="100%"/>
            </div>
                <a href="#user"><img class="circle" src="images/yuna.jpg"/></a>
                <a href="#name"><span class="black-text name">John Doe</span></a>
                <a href="#email"><span class="black-text email">jdandturk@gmail.com</span></a>
            </div>
        </li>
        <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
        <li><a href="#!">Second Link</a></li>
        <li><div class="divider"></div></li>
        <li><a class="subheader">Subheader</a></li>
        <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
    </ul>
    )
}

export default Navdraw