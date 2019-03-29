import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="Footer grey darken-4">
      <div className="container">
        <div>
            <div className="row">
                <h3 className="judul-footer white-text col s12 m12">Curio Box</h3>
                <div className="col s6 m3">
                    <a href="#" className="white-text">Pricing</a><br/>
                    <a href="#" className="white-text">Contact</a><br/>
                    <a href="#" className="white-text">Products</a><br/>
                    <a href="#" className="white-text">News</a><br/>
                </div>
                <div className="col s6 m3">
                    <a href="#" className="white-text">Pricing</a><br/>
                    <a href="#" className="white-text">Contact</a><br/>
                    <a href="#" className="white-text">Products</a><br/>
                    <a href="#" className="white-text">News</a><br/>
                </div>
            </div>
            <p className="white-text"> Copyright © 2019 CurioBox.id All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
