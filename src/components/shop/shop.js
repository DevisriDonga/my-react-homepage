import React from "react";
import shop1 from "../../assets/shop1.jpg";
import shop2 from "../../assets/shop2.jpg";
import shop3 from "../../assets/shop3.jpg";
import shop4 from "../../assets/shop4.jpg";
import shop5 from "../../assets/shop5.jpg";
import shop6 from "../../assets/shop6.jpg";
import new1 from  "../../assets/new-arrivals-hp.jpg";
import new2 from "../../assets/discounts-hp.jpg";
import "./shop.css";

const Shop = () => {
  return (
    <div className="shop-container">
    <div className="shop-new">
    <div className="new-item">
            <img src={new1} alt="new1" />
    </div>
    <div className="-item">
            <img src={new2} alt="new2" />
    </div>
    </div>
      <div className="shop-header">
        <h2>Shop With Confidence From Us</h2>
        <p>
          3 Day Delivery or You Get $25 &nbsp; | &nbsp; No Restocking Fees &nbsp; | &nbsp; Low Price Guarantee
        </p>
      </div>

      <div className="shop-brands">
        <h3>Shop by Brand</h3>
        <div className="brand-items">
          <div className="brand-item">
            <img src={shop1} alt="Elk Home" />
            
          </div>
          <div className="brand-item">
            <img src={shop2} alt="Quorum" />
           
          </div>
          <div className="brand-item">
            <img src={shop3} alt="Quoizel" />
          
          </div>
          <div className="brand-item">
            <img src={shop4} alt="Uttermost" />
         
          </div>
          <div className="brand-item">
            <img src={shop5} alt="Maxim" />
           
          </div>
          <div className="brand-item">
            <img src={shop6} alt="Eurofase" />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;