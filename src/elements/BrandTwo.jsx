import React, { Component } from "react";

import brand1 from "../assets/images/brand/brand-1.png";
import brand2 from "../assets/images/brand/brand-2.png";
import brand3 from "../assets/images/brand/brand-3.png";
import brand4 from "../assets/images/brand/brand-4.png";
import brand5 from "../assets/images/brand/brand-5.png";
import brand6 from "../assets/images/brand/brand-6.png";
import brand7 from "../assets/images/brand/brand-7.png";
import brand8 from "../assets/images/brand/brand-8.png";

class BrandTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="brand-style-2">
          <li>
            <img src={brand1} alt="Logo Images" />
          </li>
          <li>
            <img src={brand2} alt="Logo Images" />
          </li>
          <li>
            <img src={brand3} alt="Logo Images" />
          </li>
          <li>
            <img src={brand4} alt="Logo Images" />
          </li>
          <li>
            <img src={brand5} alt="Logo Images" />
          </li>
          <li>
            <img src={brand6} alt="Logo Images" />
          </li>
          <li>
            <img src={brand7} alt="Logo Images" />
          </li>
          <li>
            <img src={brand8} alt="Logo Images" />
          </li>

        </ul>
      </React.Fragment>
    );
  }
}
export default BrandTwo;
