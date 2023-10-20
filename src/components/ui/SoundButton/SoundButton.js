import React from 'react';
import Styles from './SoundButton.module.scss';

function AnimationComponent() {
  return (
    <div className={Styles.Btn}>
      <div className={Styles.BtnWrapper}>
        <div className={Styles.BtnContent}>
          <img src={'/sound/sound-off.svg'} />
        </div>
        <div className={Styles.BtnGradient}></div>
      </div>
    </div>
  );
}

export default AnimationComponent;
