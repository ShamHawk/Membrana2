import Styles from './Research.module.scss';
import soundIcon from '../../assets/img/soundIcon.svg';
import Container from '../ui/Container/Container';

const Research = () => {
  return (
    <Container>
      <div className={Styles.Block}>
        <div className={Styles.Box}>
          <div className={Styles.WrapperTop}>
            <div className={Styles.Left}>
              <h2 className={Styles.Title}>
                Наша команда Future Crew провела исследование
                <br /> по угрозам на мобильных устройствах
              </h2>
            </div>
            <div className={Styles.Right}>
              <p className={Styles.SubTitle}>
                В среднем за день наш сервис блокировал: 1670 — реклам, 494 — трекера, 110 — вредоносных программ*
              </p>
              <p className={Styles.Text}>*Исследование проводилось на 67 sim-картах membrana, Центр инноваций Future Crew.</p>
            </div>
          </div>
          <div className={Styles.Bottom}>
            <p>За 3 месяца мы выявили:</p>
            <h3>7000 потенциально опасных адресов</h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { Research };
