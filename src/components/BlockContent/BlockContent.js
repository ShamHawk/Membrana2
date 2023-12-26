import React from 'react';


import Styles from './BlockContent.module.scss';
import { useWindowSize } from '../../hooks/useWindowSize';


const BlockContent = ({ title, text, widthVideo, heightVideo, gradient, video, circlePosition, circleSize,ul }) => {
  const { mobileWidth, smallMobileWidth } = useWindowSize();

  return (
    <div className={Styles.Block}>
      <div className={Styles.Left}>
        <div className={Styles.Title}>
          <h3 style={{ background: {gradient},   WebkitBackgroundClip: "text", backgroundClip: "text" }}>{title}</h3>
        </div>
        <div className={Styles.Text}>
            {ul ? <div className={Styles.ulText}>{mobileWidth ? text[0] : text[1]}</div> : <p>{mobileWidth ? text[0] : text[1]}</p>}
        </div>
      </div>
      <div className={Styles.Right}>
        <video
          autoPlay='1'
          loop
          controls={false}
          playsInline
          preload={'metadata'}
          muted
          className={Styles.Video}
          style={{ maxWidth: mobileWidth ? 215 : widthVideo, maxHeight: mobileWidth ? 215 : heightVideo }}
        >
          <source src={video} type='video/mp4'></source>
        </video>
      </div>
      <div
        className={Styles.Circle}
        style={{
          top: circlePosition && circlePosition[0],
          right: circlePosition && circlePosition[1],
          bottom: circlePosition && circlePosition[2],
          left: circlePosition && circlePosition[3],
          width: circleSize && circleSize[0],
          height: circleSize && circleSize[1],
        }}
      ></div>
    </div>
  );
};

export default BlockContent;
