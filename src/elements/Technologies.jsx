import React, { Component } from "react";

import reactLogo from "../assets/images/technologies/react.png";
import nodeLogo from "../assets/images/technologies/nodejs.png";
import laravelLogo from "../assets/images/technologies/laravel.png";
import pythonLogo from "../assets/images/technologies/python.png";
import awsLogo from "../assets/images/technologies/aws.png";
import dockerLogo from "../assets/images/technologies/docker.png";
import mongoLogo from "../assets/images/technologies/mongodb.png";
import mysqlLogo from "../assets/images/technologies/mysql.png";

class Technologies extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="brand-style-2">
          <li>
            <img src={reactLogo} alt="React Logo" title="React" />
          </li>
          <li>
            <img src={nodeLogo} alt="Node.js Logo" title="Node.js" />
          </li>
          <li>
            <img src={laravelLogo} alt="Laravel Logo" title="Laravel" />
          </li>
          <li>
            <img src={pythonLogo} alt="Python Logo" title="Python" />
          </li>
          <li>
            <img src={awsLogo} alt="AWS Logo" title="Amazon Web Services" />
          </li>
          <li>
            <img src={dockerLogo} alt="Docker Logo" title="Docker" />
          </li>
          <li>
            <img src={mongoLogo} alt="MongoDB Logo" title="MongoDB" />
          </li>
          <li>
            <img src={mysqlLogo} alt="MySQL Logo" title="MySQL" />
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Technologies;
