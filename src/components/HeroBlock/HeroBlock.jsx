import Header from '../Header/Header';
import { useWindowSize } from '../../hooks/useWindowSize';

import Styles from './HeroBlock.module.scss';
import Container from '../ui/Container/Container';

const HeroBlock = () => {
  const { smallMobileWidth } = useWindowSize();

  return (
    <div className={Styles.Block}>
      <Header />
      <video autoPlay={true} loop muted className={Styles.Video}>
        <source src='video/hero-video.mp4' type='video/mp4'></source>
      </video>
      <div className={Styles.Wrapper}>
        <p className={Styles.SubTitle}>
          Премиум-связь
          <br /> и сервис для бизнеса
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
