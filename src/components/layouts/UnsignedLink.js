import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {NavLink} from 'react-router-dom';

const UnsignedLink = () => {
    const notify = () => toast("Coming Soon");    
    return(
        <ul className="right hide-on-med-and-down">
            <li>
                <NavLink to="/" className="hide-on-med-and-down red-text accent-2" onClick={notify}>Sign Up</NavLink>
            </li>
            <li>
                <NavLink className="btn red accent-2" to="/" onClick={notify}>Login</NavLink>
            </li>
        </ul>
    )
}

export default UnsignedLink