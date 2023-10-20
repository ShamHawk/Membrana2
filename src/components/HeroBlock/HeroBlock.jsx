import Styles from './HeroBlock.module.scss';
import { Header } from '../Header/Header';

const HeroBlock = () => {
  return (
    <div className={Styles.Block}>
      <Header />
      <video autoPlay={true} loop muted className={Styles.Video}>
        <source src='/video/hero-video.mp4' type='video/mp4'></source>
      </video>
      <p className={Styles.SubTitle}>
        Премиум-связь
        <br /> и сервис для бизнеса
      </p>
    </div>
  );
};

export default HeroBlock;
