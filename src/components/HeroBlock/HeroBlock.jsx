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
      <Container>
        {smallMobileWidth && (
          <div className={Styles.Wrapper}>
            <img src={'/Membrana.svg'} alt={'Membrana'} />
          </div>
        )}
        <p className={Styles.SubTitle}>
          Премиум-связь
          <br /> и сервис для бизнеса
        </p>
      </Container>
    </div>
  );
};

export default HeroBlock;
