import React, { useState } from 'react';
import Styles from './SoundButton.module.scss';

function SoundButton() {
  const [isSoundOn, setIsSoundOn] = useState(true);

  const toggleSound = () => {
    setIsSoundOn((prev) => !prev);
  };

  return (
    <div className={Styles.Btn} onClick={toggleSound}>
      <div className={Styles.BtnWrapper}>
        <div className={Styles.BtnContent}>
          <img src={isSoundOn ? '/sound/sound-on.svg' : '/sound/sound-off.svg'} alt={isSoundOn ? 'Sound On' : 'Sound Off'} />
        </div>
        <div className={Styles.BtnGradient}></div>
      </div>
    </div>
  );
}

export default SoundButton;
