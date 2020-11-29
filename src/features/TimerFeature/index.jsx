import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './TimerFeature.scss';

TimerFeature.propTypes = {
  seconds: PropTypes.number.isRequired,
};

function TimerFeature({ seconds }) {
  const [count, setCount] = useState(seconds);
  useEffect(() => {
    const secondsInterval = setInterval(() => {
      setCount((x) => {
        if (x <= 0) {
          clearInterval(secondsInterval);
          return 0;
        }
        return x - 1;
      });
    }, 1000);

    //clean up function
    return () => {
      clearInterval(secondsInterval);
    };
  }, [seconds]);

  return <div className={`timer ${count === 0 ? 'finished' : ''}`}>{`0${count}`.slice(-2)}</div>;
}

export default TimerFeature;
