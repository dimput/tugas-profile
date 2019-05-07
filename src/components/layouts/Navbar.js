import React from 'react';
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import SignedLink from './SignedLink';
import Navdraw from './Navdraw';
import UnsignedLink from './UnsignedLink';
import firebase from './../../config/config.js';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
  const notify = () => toast("This is my Contact");
    // var auth = firebase.auth();
    // const links = auth.id? <SignedLink/> : <UnsignedLink/>;
    return(
    <div>
        <nav style={{fontWeight:"bold"}} className="white">
          <a href="#" data-target="mobile-demo" className="sidenav-trigger" style={{display:"block"}}><i className="material-icons red-text accent-2">menu</i></a>
          {/* {links} */}
          {/* <UnsignedLink/> */}
          <ul className="right hide-on-med-and-down">
            <li>
                <NavLink to="/kontak" className="hide-on-med-and-down red-text accent-2" onClick={notify}>Kontak</NavLink>
            </li>
            <li>
                <NavLink to="/kontak" className="hide-on-med-and-down red-text accent-2" onClick={notify}>Profile</NavLink>
            </li>
            <li>
                <NavLink className="btn red accent-2" to="/" onClick={notify}>Login</NavLink>
            </li>
          </ul>
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo red-text accent-2" style={{fontFamily:"YayFriday"}}>Hi Skrulls !</Link>
        </div>
        </nav>
        <Navdraw/>
    </div>
    )
}

export default Navbar