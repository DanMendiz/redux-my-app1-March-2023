import React from 'react';
import styles from './Lamp.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { selectLampState, turnOff, turnOn } from './lampSlice';

function Lamp() {
  const lampIsOn = useSelector(selectLampState);

  const dispatch = useDispatch();

  const turnLampOn = () => {
    dispatch(turnOn());
  };

  const turnLampOff = () => {
    dispatch(turnOff());
  };

  let lampStyle = {};

  if (lampIsOn) {
    lampStyle.backgroundColor = 'yellow';
  }

  return (
    <>
      <div className={styles.lamp} style={lampStyle}>
        {lampIsOn ? 'on' : 'off'}
      </div>
      <button onClick={turnLampOn}>Turn Lamp On</button>
      <button onClick={turnLampOff}>Turn Lamp Off</button>
    </>
  );
}

export default Lamp;
