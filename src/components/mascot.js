import React, { useState } from 'react';
import "./mascot.css";
import mascot from "../img/eye_0_post.png"

const mascotAlt = "hand drawing of eye, complete with brow and lashes";


const Mascot = () => {
  return (
    <div className="mascot">
      <img
        src={mascot}
        alt={mascotAlt}
        className="img-fluid"
      />
    </div>
  );
};

export default Mascot;
