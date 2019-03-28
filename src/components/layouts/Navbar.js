import React from 'react';
import {Link} from 'react-router-dom';
import SignedLink from './SignedLink';
import Logos from './logos.png';
import Navdraw from './Navdraw';
const Navbar = () => {
    return(
    <div>
        <nav>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <div className="nav-wrapper container">
          <a href="#!" className="brand-logo">Curio Box</a>
          <SignedLink/>
        </div>
        </nav>
        <Navdraw/>
    </div>
    )
}

export default Navbar