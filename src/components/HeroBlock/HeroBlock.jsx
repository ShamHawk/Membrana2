import { Header } from '../Header/Header';
import { useWindowSize } from '../../hooks/useWindowSize';

import Styles from './HeroBlock.module.scss';
import Container from '../ui/Container/Container';

const HeroBlock = () => {
  const { smallMobileWidth } = useWindowSize();

  return (
    <div className={Styles.Block}>
      <Header />
      {!smallMobileWidth && (
        <video autoPlay={true} loop muted className={Styles.Video}>
          <source src='/video/hero-video.mp4' type='video/mp4'></source>
        </video>
      )}
      {smallMobileWidth && (
        <Container>
          <div className={Styles.Wrapper}>
            {/*<img src={'/Membrana.svg'} alt={'Membrana'} />*/}
            <h2 className={Styles.Title}>Membrana</h2>
            <p className={Styles.SubTitle}>
              Премиум-связь
              <br /> и сервис для бизнеса
            </p>
            <div className={Styles.Stick}></div>
          </div>
        </Container>
      )}
      {!smallMobileWidth && (
        <p className={Styles.SubTitle}>
          Премиум-связь
          <br /> и сервис для бизнеса
        </p>
      )}
    </div>
  );
};

export default HeroBlock;
