import React, { useState, useEffect } from 'react';
import Styles from './SoundButton.module.scss';

function SoundButton() {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const soundIsOn = localStorage.getItem('soundIsOn');
    if (soundIsOn !== null) {
      setIsSoundOn(soundIsOn === 'true');
    }
  }, []);

  const toggleSound = () => {
    setIsSoundOn((prev) => !prev);
    setShowText(false);
  };

  return (
    <div className={Styles.BtnWrapper}>
      {showText && <div className={Styles.BtnText}>{isSoundOn ? '' : 'Включите звук для полного погружения'}</div>}
      <div className={Styles.Btn} onClick={toggleSound}>
        <div className={Styles.BtnInner}>
          <div className={Styles.BtnContent}>
            <img src={isSoundOn ? '/sound/sound-on.svg' : '/sound/sound-off.svg'} alt={isSoundOn ? 'Sound On' : 'Sound Off'} />
          </div>
          <div className={Styles.BtnGradient}></div>
        </div>
      </div>
    </div>
  );
}

export default SoundButton;
