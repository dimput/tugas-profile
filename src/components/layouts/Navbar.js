import React from 'react';
import {Link} from 'react-router-dom';
import SignedLink from './SignedLink';
import Navdraw from './Navdraw';
import UnsignedLink from './UnsignedLink';
const Navbar = () => {
    return(
    <div>
        <nav style={{fontWeight:"bold"}} className="white">
          <a href="#" data-target="mobile-demo" className="sidenav-trigger" style={{display:"block"}}><i className="material-icons red-text accent-2">menu</i></a>
          <SignedLink/>
          <UnsignedLink/>
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo red-text accent-2" style={{fontFamily:"YayFriday"}}>Curio Box</Link>
        </div>
        </nav>
        <Navdraw/>
    </div>
    )
}

export default Navbar