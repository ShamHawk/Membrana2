import Styles from "./StartPage.module.scss";
import { Header } from "../Header/Header";

const StartPage = () => {
    return (
        <div className={Styles.Container}>
            <div className={Styles.Background}></div>
            <Header />
            <div className={Styles.TitleContainer}>
                <h1 className={Styles.Title}>Membrana</h1>
                <p className={Styles.SubTitle}>
                    Премиум-связь и сервис для защиты данных для&nbsp;вас и
                    команды
                </p>
            </div>
        </div>
    );
};

export { StartPage };
