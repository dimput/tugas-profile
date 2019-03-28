import React from 'react';
import {NavLink} from 'react-router-dom';
import BG from './bgsidenav.png';

const Navdraw = () => {
    return(
    <ul id="mobile-demo" className="sidenav">
        <li><div className="user-view">
            <div className="background">
                <img src={BG} alt="background-sidebar" width="100%"/>
            </div>
                <NavLink to="#user"><img className="circle" src="images/yuna.jpg" alt="icon-user"/></NavLink>
                <NavLink to="#name"><span className="black-text name">John Doe</span></NavLink>
                <NavLink to="#email"><span className="black-text email">jdandturk@gmail.com</span></NavLink>
            </div>
        </li>
        <li><NavLink to="#!"><i className="material-icons">cloud</i>First Link With Icon</NavLink></li>
        <li><NavLink to="#!">Second Link</NavLink></li>
        <li><div className="divider"></div></li>
        <li><a className="subheader">Subheader</a></li>
        <li><NavLink to="/" className="waves-effect" href="#!">Third Link With Waves</NavLink></li>
    </ul>
    )
}

export default Navdraw