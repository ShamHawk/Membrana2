import Styles from "./Header.module.scss";
import logo from "../../assets/img/logo.svg";

const Header = () => {
    return (
        <div className={Styles.Container}>
            <div className={Styles.Header}>
                <img src={logo} alt="Logo" className="logo" />
                <a className={Styles.RequestBtn}>оставить заявку</a>
            </div>
        </div>
    );
};

export { Header };
