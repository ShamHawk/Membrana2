import Styles from "./Research.module.scss";
import soundIcon from "../../assets/img/soundIcon.svg";

const Research = () => {
    return (
        <div className={Styles.Container}>
            <div className={Styles.Box}>
                <div className={Styles.TitleContainer}>
                    <h2 className={Styles.Title}>
                        Наша команда Future Crew провела исследование
                        по&nbsp;угрозам на&nbsp;мобильных устройствах
                    </h2>
                    <img className={Styles.SoundIcon} src={soundIcon} alt="" />
                </div>
                <div className={Styles.ContentContainer}>
                    <p className={Styles.Text}>За 3 месяца мы выявили:</p>
                    <h2 className={Styles.SubText}>
                        7000 потенциально опасных адресов
                    </h2>
                </div>
            </div>
        </div>
    );
};

export { Research };
