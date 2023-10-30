import Header from '../Header/Header';
import { useWindowSize } from '../../hooks/useWindowSize';
import Styles from './HeroBlock.module.scss';
import { useEffect, useState } from 'react';

const HeroBlock = ({ formBlockRef }) => {
  const { smallMobileWidth, desktopWidth, windowWidth } = useWindowSize();
  const [srcVideo, setSrcVideo] = useState(null);

  useEffect(() => {
    const timestamp = Date.now();
    const videoUrl = smallMobileWidth ? `video/hero-video-mobile.mp4?v=${timestamp}` : `video/hero-video.mp4?v=${timestamp}`;

    if (windowWidth > 440) {
      setSrcVideo(
        <video autoPlay='1' playsInline preload={'metadata'} loop muted className={Styles.Video}>
          <source src={videoUrl} type='video/mp4'></source>
        </video>,
      );
    } else {
      setSrcVideo(
        <video autoPlay='1' playsInline preload={'metadata'} loop muted className={Styles.Video}>
          <source src={videoUrl} type='video/mp4'></source>
        </video>,
      );
    }
  }, [windowWidth]);

  return (
    <div className={Styles.Block}>
      <Header formBlockRef={formBlockRef} />
      {srcVideo}
      <div className={Styles.Wrapper}>
        <p className={Styles.SubTitle}>
          Премиум-связь <br />и защита данных команды
        </p>
        {smallMobileWidth && (
          <div className={Styles.Stick}>
            <div className={Styles.SmallerStick}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroBlock;
