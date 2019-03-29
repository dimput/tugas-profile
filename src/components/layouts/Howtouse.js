import React from 'react';
import './howtouse.css';
import icon1 from './order.png';

function Howtouse() {
  return (
    <div className="Howtouse">
      <div className="container">
        <div className="title">
          <h3 style={{fontFamily:"YayFriday",color:"#1f2a36",paddingBottom:"50px"}} className="center-align">
          HOW CURIOBOX WORKS
          </h3>
        </div>
        <div className="row">
          <div className="col s12 m3">
            <div className="col s6 m12">
              <img src={icon1} alt="order" width="100%"/>
            </div>
            <div className="center-align col s6 m12">
              <h4 className="howtouse-title">
                ORDER
              </h4>
              <div className="howtouse-text center-align">
              Choose your plan and hit Order
            </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="col s6 m12">
              <img src={icon1} alt="order" width="100%"/>
            </div>
            <div className="center-align col s6 m12">
              <h4 className="howtouse-title">
                ORDER
              </h4>
              <div className="howtouse-text center-align">
              Choose your plan and hit Order
            </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="col s6 m12">
              <img src={icon1} alt="order" width="100%"/>
            </div>
            <div className="center-align col s6 m12">
              <h4 className="howtouse-title">
                ORDER
              </h4>
              <div className="howtouse-text center-align">
              Choose your plan and hit Order
            </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="col s6 m12">
              <img src={icon1} alt="order" width="100%"/>
            </div>
            <div className="center-align col s6 m12">
              <h4 className="howtouse-title">
                ORDER
              </h4>
              <div className="howtouse-text center-align">
              Choose your plan and hit Order
            </div>
            </div>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default Howtouse
