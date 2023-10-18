import Styles from "./WorkLifeBalance.module.scss";

const WorkLifeBalance = () => {
    return (
        <div className={Styles.Container}>
            <div className={Styles.TitleContainer}>
                <h2 className={Styles.Title}>
                    Ваш work-life balance под защитой
                </h2>
            </div>
        </div>
    );
};

export { WorkLifeBalance };
