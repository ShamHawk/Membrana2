import Styles from './Header.module.scss';
import Container from '../ui/Container/Container';

const Header = () => {
  return (
    <div className={Styles.Header}>
      <Container>
        <div className={Styles.Wrapper}>
          <div className={Styles.Logo}>
            <img className={Styles.LogoIcon} src={'/logo/logo.svg'} alt='Logo icon' />
            <img className={Styles.LogoText} src={'/logo/logo-text.svg'} alt='Logo text' />
          </div>
          <a className={Styles.Btn}>оставить заявку</a>
        </div>
      </Container>
    </div>
  );
};

export { Header };
