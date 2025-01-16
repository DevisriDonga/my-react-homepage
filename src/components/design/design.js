import React from "react";
import "./design.css";
import design1 from "../../assets/design1.jpg";
import design2 from "../../assets/design2.jpg";
import design3 from "../../assets/design3.jpg";
import design4 from "../../assets/design4.jpg";
import design5 from "../../assets/design5.jpg";
import design6 from "../../assets/design6.jpg";
import design7 from "../../assets/design7.jpg";
import design8 from "../../assets/design8.jpg";
import design9 from "../../assets/design9.jpg";
import design10 from "../../assets/design10.jpg";
import design11 from "../../assets/design11.jpg";
import design12 from "../../assets/design12.jpg";


function Design() {
  return (
    <div className="design">
     
      <h2>Shop by Type</h2>
      <div className="grid">
        <div className="item">
          <img src={design1} alt="Chandeliers" />
          <p>Chandeliers</p>
        </div>
        <div className="item">
          <img src={design2} alt="Outdoor" />
          <p>Outdoor</p>
        </div>
        <div className="item">
          <img src={design3} alt="Wall Sconces" />
          <p>Wall Sconces</p>
        </div>
        <div className="item">
          <img src={design4} alt="Ceiling Fans" />
          <p>Ceiling Fans</p>
        </div>
        <div className="item">
          <img src={design5} alt="Ceiling & Hanging" />
          <p>Ceiling & Hanging</p>
        </div>
        <div className="item">
          <img src={design6} alt="Pendants" />
          <p>Pendants</p>
        </div>
      </div>

   
      <h2>Shop by Room Type</h2>
      <div className="grid">
        <div className="item">
          <img src={design7} alt="Dining Room" />
          <p>Dining Room</p>
        </div>
        <div className="item">
          <img src={design8} alt="Kitchen Lighting" />
          <p>Kitchen Lighting</p>
        </div>
        <div className="item">
          <img src={design9} alt="Bedroom Lighting" />
          <p>Bedroom Lighting</p>
        </div>
        <div className="item">
          <img src={design10} alt="Living Room Lighting" />
          <p>Living Room Lighting</p>
        </div>
        <div className="item">
          <img src={design11} alt="Entry Way/Foyer" />
          <p>Entry Way/Foyer</p>
        </div>
        <div className="item">
          <img src={design12} alt="Work/Office" />
          <p>Work/Office</p>
        </div>
      </div>
    </div>
  );
}

export default Design;