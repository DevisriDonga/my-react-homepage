import React from "react";
import "./models.css";
import bromic from "../../assets/bromic.jpg";
import progress from "../../assets/progress.jpg";
import maxim from "../../assets/maxim.jpg";
import kichler from "../../assets/kichler.jpg";

const Models = () => {
  return (
    <div className="models-section">
    <hr className="hr-line"></hr>
      <h2>People Who Viewed Items You Browsed Also Viewed</h2>
      <div className="models-container">
        <div className="model-item">
          <img
            src={bromic}
            alt="Bromic Heating"
          />
          <p className="model-title">Bromic Heating</p>
          <p className="model-code">BH3130061</p>
        </div>
        <div className="model-item">
          <img
            src={progress}
            alt="Progress Lighting"
          />
          <p className="model-title">Progress Lighting</p>
          <p className="model-code">P500381</p>
        </div>
        <div className="model-item">
          <img
            src={maxim}
            alt="Maxim Lighting"
          />
          <p className="model-title">Maxim Lighting</p>
          <p className="model-code">57613</p>
        </div>
        <div className="model-item">
          <img
            src={kichler}
            alt="Kichler Lighting"
          />
          <p className="model-title">Kichler Lighting</p>
          <p className="model-code">43496</p>
        </div>
      </div>
      <hr className="hr-line"></hr>
      <p>Shop Canada Lighting - Lowest Lighting Prices to Canada</p>
    </div>
  );
};

export default Models;
