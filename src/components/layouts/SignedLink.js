import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedLink = () => {
    return(
        <ul className="right hide-on-med-and-down">
            <li>
                <NavLink to="/" className="hide-on-med-and-down">Name</NavLink>
            </li>
            <li>
                <NavLink className="btn btn-floating light-blue darken-3" to="/">NN</NavLink>
            </li>
        </ul>
    )
}

export default SignedLink