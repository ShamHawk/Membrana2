import Styles from './Header.module.scss';
import Container from '../ui/Container/Container';

const Header = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className={Styles.Header}>
      <Container className={Styles.Container}>
        <div className={Styles.Wrapper}>
          <div className={Styles.Logo} onClick={scrollToTop}>
            <img className={Styles.LogoIcon} src={'img/logo/logo.svg'} alt='Logo icon' width={'100%'} height={'100%'} />
            <img className={Styles.LogoText} src={'img/logo/logo-text.svg'} alt='Logo text' />
          </div>
          <a className={Styles.Btn}>оставить заявку</a>
        </div>
      </Container>
    </div>
  );
};

export default Header;
