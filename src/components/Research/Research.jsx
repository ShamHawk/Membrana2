import Container from '../ui/Container/Container';
import { useWindowSize } from '../../hooks/useWindowSize';
import Styles from './Research.module.scss';
import { useEffect, useState } from 'react';



const Research = () => {
  const { windowWidth } = useWindowSize();
  const arrAnimation = [
    {
      subTitle: '65 млрд рублей',
      text: windowWidth <= 500 ? <>ущерб от IT-преступлений <br/> в России в 2022 г.</> : <>ущерб от IT-преступлений в России в 2022 г.</>,
    },
    {
      subTitle: '300 000',
      text: 'новых вредоносных программ создаётся ежедневно',
    },
    {
      subTitle: '92%',
      text: 'вредоносных программ распространяется через e-mail',
    },
    {
      subTitle: '4,1 млн',
      text: 'интернет-сайтов заражены вредоносным ПО',
    },
  ];


  return (
    <Container>
      <div className={Styles.Block}>
        <div className={Styles.Box}>
          <div className={Styles.WrapperTop}>
            <div className={Styles.Left}>
              <h2 className={Styles.Title}>
                Кибератаки <br/>
                на&nbsp;бизнес:<br/>
                масштабы
                и&nbsp;потери
              </h2>
            </div>
            <div className={Styles.Right}>
              {arrAnimation.map((obj,index) => {
                 return <div key={index} className={Styles.RightContainer}>
                   <p className={Styles.SubTitle}>
                     {obj.subTitle}
                   </p>
                   <p className={Styles.Text}>
                     {obj.text}
                   </p>
                 </div>
              })}
            </div>
          </div>
          <div className={Styles.WrapperBottom}>
            <p>*По данным <a target={'_blank'} href="https://www.packetlabs.net/posts/239-cybersecurity-statistics-2023/">Packetlabs</a> и <a target={'_blank'} href="https://www.vedomosti.ru/technology/news/2023/03/03/965181-chislo-kiberatak">«Ведомостей»</a></p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { Research };
