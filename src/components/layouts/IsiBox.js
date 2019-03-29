import React from 'react';
import './IsiBox.css';
import logo from './logo1.svg';


function IsiBox() {
  return (
    <div className="IsiBox pink accent-1">
      <div className="container penghilang-padding">
        <div className="row">
          <div className="col s12 m6 offset-m6">
            <div className="row">
              <div className="title"><h3 style={{fontFamily:"YayFriday"}} className="white-text ">WHAT'S IN YOUR GIFT BOX ?</h3></div>
            </div>
            <div className="col s12" style={{padding:"0"}}>
              <div className="col s3">
                <img src={logo} alt="logo" width="100%" style={{verticalAlign:"middle"}}/>
              </div>
              <div className="col s9" style={{padding:"0"}}>
                <div><p className="white-text paragraf-isi-box"><b>Genuine & High Value</b></p></div>
                <div className="white-text" style={{fontStyle:"italic"}}>
                  <p style={{marginTop:"0px",paddingTop:"0px"}}>High quality and genuine Japanese and Korean beauty products to add into your make up and skin care routine!</p>
                </div>
              </div>
            </div>
            <div className="col s12" style={{padding:"0"}}>
              <div className="col s3">
                <img src={logo} alt="logo" width="100%" style={{verticalAlign:"middle"}}/>
              </div>
              <div className="col s9" style={{padding:"0"}}>
                <div><p className="white-text paragraf-isi-box"><b>Genuine & High Value</b></p></div>
                <div className="white-text" style={{fontStyle:"italic"}}>
                  <p style={{marginTop:"0px",paddingTop:"0px"}}>High quality and genuine Japanese and Korean beauty products to add into your make up and skin care routine!</p>
                </div>
              </div>
            </div>
            <div className="col s12" style={{padding:"0"}}>
              <div className="col s3">
                <img src={logo} alt="logo" width="100%" style={{verticalAlign:"middle"}}/>
              </div>
              <div className="col s9" style={{padding:"0"}}>
                <div><p className="white-text paragraf-isi-box"><b>Genuine & High Value</b></p></div>
                <div className="white-text" style={{fontStyle:"italic"}}>
                  <p style={{marginTop:"0px",paddingTop:"0px"}}>High quality and genuine Japanese and Korean beauty products to add into your make up and skin care routine!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IsiBox
