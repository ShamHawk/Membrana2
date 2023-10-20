import Styles from './Header.module.scss';
import logo from '../../assets/img/logo.svg';
import Container from '../ui/Container/Container';

const Header = () => {
  return (
    <div className={Styles.Header}>
      <Container>
        <div className={Styles.Wrapper}>
          <img src={logo} alt='Logo' className='logo' />
          <a className={Styles.Btn}>оставить заявку</a>
        </div>
      </Container>
    </div>
  );
};

export { Header };
