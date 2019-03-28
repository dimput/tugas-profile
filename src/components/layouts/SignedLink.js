import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedLink = () => {
    return(
        <ul className="right hide-on-med-and-down">
            <li>
                <NavLink to="/" className="hide-on-med-and-down red-text accent-2">Name</NavLink>
            </li>
            <li>
                <NavLink className="btn btn-floating red accent-2" to="/">NN</NavLink>
            </li>
        </ul>
    )
}

export default SignedLink