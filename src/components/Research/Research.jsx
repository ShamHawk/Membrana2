import Container from '../ui/Container/Container';

import Styles from './Research.module.scss';
import { useEffect, useState } from 'react';

const arrAnimation = [
  {
    subTitle: '65 млрд рублей',
    text: 'ущерб от IT-преступлений в России в 2022 г.',
  },
  // {
  //   subTitle: 'на 65%',
  //   text: 'выросло число кибератак на российские информационные системы в 2023 г.',
  // },
  // {
  //   subTitle: 'каждые 39 секунд',
  //   text: 'в мире происходит атака на инфраструктуру кибербезопасности бизнеса',
  // },
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

const Research = () => {
  // const [index, setIndex] = useState(0);
  // const [opacity, setOpacity] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setOpacity(0);
  //     setTimeout(() => {
  //       setIndex((prevIndex) => (prevIndex + 1) % arrAnimation.length);
  //       setOpacity(1);
  //     }, 500);
  //   }, 3000);
  //
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <Container>
      <div className={Styles.Block}>
        <div className={Styles.Box}>
          <div className={Styles.WrapperTop}>
            <div className={Styles.Left}>
              <h2 className={Styles.Title}>Кибератаки на бизнес: масштабы и <span>потери</span></h2>
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
            <p>*По данным Packetlabs и «Ведомостей»</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { Research };
