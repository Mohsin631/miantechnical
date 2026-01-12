import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useTranslation } from "react-i18next";

const CounterOne = () => {
  const { t } = useTranslation();
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  };

  const Data = [
    {
      countNum: 250,
      countTitle: t("counters.projectCount.title"),
      suffix: t("counters.projectCount.suffix", { defaultValue: "+" }),
    },
    {
      countNum: 120,
      countTitle: t("counters.clientCount.title"),
      suffix: t("counters.clientCount.suffix", { defaultValue: "+" }),
    },
    {
      countNum: 15,
      countTitle: t("counters.experienceCount.title"),
      suffix: t("counters.experienceCount.suffix", { defaultValue: "+" }),
    },
  ];

  return (
    <div className="row px-3">
      {Data.map((value, index) => (
        <div
          className="col-lg-4 col-md-4 col-sm-6 col-12  md:text-center xl:text-center"
          key={index}
        >
          <h5 className="text-[40px] md:text-[60px] xl:text-[80px] theme-gradient  md:text-center xl:text-center m-0">
            <VisibilitySensor
              onChange={onVisibilityChange}
              offset={{ top: 10 }}
              delayedCall
            >
              <CountUp end={didViewCountUp ? value.countNum : 0} duration={3} />
            </VisibilitySensor>
            {value.suffix}
          </h5>
          <p className="mb-3">{value.countTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default CounterOne;