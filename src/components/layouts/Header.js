import React from 'react'
import './header.css';

function Header() {
  return (
    <div className="Header pink accent-1">
        <div className="container">
            <div className="row">
                <div className="col s12 m6">
                    <div className="card ku z-depth-0">
                        <div>
                            <div className="card-title white-text">
                                <h1 style={{fontFamily:"YayFriday"}}>Gift Box Indonesia</h1>
                            </div>
                            <div className="white-text">
                                <p className="header-text">
                                Enjoy a Gift box containing 8-9 items of suprising!
                                </p>
                            </div>
                            <div className="btn red accent-2" style={{fontWeight:"bold"}}>OPENING SOON</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
