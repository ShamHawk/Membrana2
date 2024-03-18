import Styles from './Header.module.scss';
import Container from '../ui/Container/Container';
import {useWindowSize} from "../../hooks/useWindowSize";
import {useState} from "react";
import classNames from "classnames";

const Header = ({ formBlockRef }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToFormBlock = () => {
    formBlockRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const {windowWidth } = useWindowSize();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };


  return (
      <div className={Styles.Header}>
        <Container className={Styles.Container}>
          <div className={Styles.Wrapper}>
            <div className={Styles.Logo} onClick={scrollToTop}>
              <img className={Styles.LogoIcon} src={'img/logo/logo.svg'} alt='Logo icon' width={'100%'} height={'100%'} />
            </div>
            <div className={Styles.navContainer}>
                <div className={Styles.Btn} onClick={scrollToFormBlock} data-umami-event="open_form">
                оставить заявку
              </div>

             <div className={Styles.btnBurgerContainer}  onClick={toggleMobileNav}>
               <button
                   className={classNames(Styles.Burger, isMobileNavOpen && Styles.Burger__active)} onClick={toggleMobileNav}
               >
                 <span></span>
               </button>
             </div>

            </div>
            <div className={classNames(Styles.BurgerMenu,!isMobileNavOpen ? Styles.BurgerMenuClose : null )}>
              <div className={Styles.BurgerMenuContent}>
                <div className={classNames(Styles.Logo,Styles.LogoBurger)} onClick={scrollToTop}>
                  <div className={Styles.Logo} onClick={scrollToTop}>
                    <img className={Styles.LogoIcon} src={'img/logo/logo.svg'} alt='Logo icon' width={'100%'} height={'100%'} />
                  </div>
                </div>

                <a className={Styles.link} href="https://business.membrana.me/" data-umami-event="link_membrana">Membrana для бизнеса</a>
              </div>
            </div>

          </div>
        </Container>
      </div>
  );
};

export default Header;