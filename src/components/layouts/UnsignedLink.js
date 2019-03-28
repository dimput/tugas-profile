import React from 'react';
import {NavLink} from 'react-router-dom';

const UnsignedLink = () => {
    return(
        <ul className="right hide-on-med-and-down">
            <li>
                <NavLink to="/" className="hide-on-med-and-down red-text accent-2">Sign Up</NavLink>
            </li>
            <li>
                <NavLink className="btn red accent-2" to="/">Login</NavLink>
            </li>
        </ul>
    )
}

export default UnsignedLink