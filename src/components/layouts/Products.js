import React from 'react';
import kotak1 from './logo-box-promot-1.png';
import kotak2 from './logo-box-promot-2.png';
import kotak3 from './logo-box-promot-3.png';
import kotak4 from './logo-box-promot-4.png';
import './Products.css';
import './IsiBox.css';

function Products() {
  return (
    <div className="Products">
        <div className="container penghilang-padding">
            <div className="title">
                <h3 style={{fontFamily:"YayFriday",paddingTop:"50px",paddingBottom:"5px"}} className="center-align pink-text accent-2">SELECT YOUR PLAN</h3>
                <h6 className="center-align">Best Pricing in the world! Cancel anytime!</h6>
            </div>
            <div className="row">
                <div className="col s6 m3 white">
                    <div className="kotak-products">
                        <div>
                            <img src={kotak1} alt="kotak" width="100%"/>
                        </div>
                        <div className="center-align">
                            <h5 className="judul-products pink-text accent-1">Curio Box</h5>
                            <h6 className="pink-text accent-2 harga">Rp -</h6>
                            <div className="btn btn-products pink accent-1" style={{fontWeight:"bolder",marginBottom:"15px"}}>COMING SOON</div>
                        </div>
                    </div>
                </div>
                <div className="col s6 m3 white">
                    <div className="kotak-products">
                        <div>
                            <img src={kotak2} alt="kotak" width="100%"/>
                        </div>
                        <div className="center-align">
                            <h5 className="judul-products pink-text accent-1">Premium Box</h5>
                            <h6 className="pink-text accent-2 harga">Rp -</h6>
                            <div className="btn btn-products pink accent-1" style={{fontWeight:"bolder",marginBottom:"15px"}}>COMING SOON</div>
                        </div>
                    </div>
                </div>
                <div className="col s6 m3 white">
                    <div className="kotak-products">
                        <div>
                            <img src={kotak3} alt="kotak" width="100%"/>
                        </div>
                        <div className="center-align">
                            <h5 className="judul-products pink-text accent-1">Exclusive Box</h5>
                            <h6 className="pink-text accent-2 harga">Rp -</h6>
                            <div className="btn btn-products pink accent-1" style={{fontWeight:"bolder",marginBottom:"15px"}}>COMING SOON</div>
                        </div>
                    </div>
                </div>
                <div className="col s6 m3 white">
                    <div className="kotak-products">
                        <div>
                            <img src={kotak4} alt="kotak" width="100%"/>
                        </div>
                        <div className="center-align">
                            <h5 className="judul-products pink-text accent-1">Platinum Box</h5>
                            <h6 className="pink-text accent-2 harga">Rp -</h6>
                            <div className="btn btn-products pink accent-1" style={{fontWeight:"bolder",marginBottom:"15px"}}>COMING SOON</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products
