import Styles from "./Protection.module.scss";
import img from "../../assets/img/content-img-1.svg";

const Protection = () => {
    return (
        <div className={Styles.Container}>
            <div className={Styles.BoxContainer}>
                <div className={Styles.TitleContainer}>
                    <h2 className={Styles.Title}>
                        данные и конфиденциальная информация под&nbsp;защитой
                    </h2>
                    <img src={img} alt="" />
                </div>
                <p className={Styles.Subtext}>
                    В&nbsp;рабочее время, отпуске, командировках, наш сервис
                    будет отслеживать угрозы и&nbsp;блокировать подозрительные
                    сайты, фишинговые ссылки.
                </p>
            </div>
        </div>
    );
};

export { Protection };
