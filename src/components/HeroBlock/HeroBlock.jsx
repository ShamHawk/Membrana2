import Header from '../Header/Header';
import { useWindowSize } from '../../hooks/useWindowSize';
import Styles from './HeroBlock.module.scss';
import { useEffect, useState } from 'react';

const HeroBlock = ({ formBlockRef }) => {
  const { smallMobileWidth, desktopWidth, mobileWidth } = useWindowSize();
  const [srcVideo, setSrcVideo] = useState(null);

  useEffect(() => {
    // Генерируем временную метку
    const timestamp = Date.now();
    const videoUrl = smallMobileWidth ? `video/hero-video-mobile.mp4?v=${timestamp}` : `video/hero-video.mp4?v=${timestamp}`;

    if (smallMobileWidth) {
      setSrcVideo(
        <video autoPlay={true} loop muted className={Styles.Video}>
          <source src={videoUrl} type='video/mp4'></source>
        </video>,
      );
    } else {
      setSrcVideo(
        <video autoPlay={true} loop muted className={Styles.Video}>
          <source src={videoUrl} type='video/mp4'></source>
        </video>,
      );
    }
  }, [mobileWidth]);

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
