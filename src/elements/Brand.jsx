import React, { Component } from "react";

import brand1 from "../assets/images/brand/brand-1.png";
import brand2 from "../assets/images/brand/brand-2.png";
import brand3 from "../assets/images/brand/brand-3.png";
import brand4 from "../assets/images/brand/brand-4.png";
import brand5 from "../assets/images/brand/brand-5.png";
import brand6 from "../assets/images/brand/brand-6.png";

class Brand extends Component {
  render() {
    const { branstyle } = this.props;
    return (
      <React.Fragment>
        <ul className={`brand-list ${branstyle}`}>
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
        </ul>
      </React.Fragment>
    );
  }
}
export default Brand;
