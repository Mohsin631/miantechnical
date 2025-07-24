import React, { Component, Fragment } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class CounterOne extends Component {
  state = {
    didViewCountUp: false,
  };

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };

  render() {
    let Data = [
      {
        countNum: 250,
        countTitle: "Successful Projects Delivered Globally",
      },
      {
        countNum: 120,
        countTitle: "Satisfied Clients Across Multiple Industries",
      },
      {
        countNum: 15,
        countTitle: "Years of Combined Team Experience",
      },
    ];

    return (
      <Fragment>
        <div className="row">
          {Data.map((value, index) => (
            <div
              className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12 text-center"
              key={index}
            >
              <h5 className="counter theme-gradient">
                <VisibilitySensor
                  onChange={this.onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp
                    end={this.state.didViewCountUp ? value.countNum : 0}
                    duration={3}
                  />
                </VisibilitySensor>
                +
              </h5>
              <p className="description">{value.countTitle}</p>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default CounterOne;
