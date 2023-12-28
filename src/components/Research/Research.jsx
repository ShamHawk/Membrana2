import Container from '../ui/Container/Container';
import { useWindowSize } from '../../hooks/useWindowSize';
import Styles from './Research.module.scss';



const Research = () => {
  const { windowWidth } = useWindowSize();
  const arrAnimation = [
    {
      subTitle: '1 047 044',
      text: 'вредоносных адреса',
    },
    {
      subTitle: '134 560',
      text: 'рекламных скриптов',
    },
    {
      subTitle: '55 885',
      text: 'трекинговых ресурсов',
    },
  ];


  return (
    <Container>
      <div className={Styles.Block}>
        <div className={Styles.Box}>
          <div className={Styles.WrapperTop}>
            <div className={Styles.Left}>
              <h2 className={Styles.Title}>
                Защищаем от&nbsp;известных и&nbsp;новых угроз и&nbsp;постоянно <br/> пополняем базу
              </h2>
            </div>
            <div className={Styles.Right}>
              {arrAnimation.map((obj,index) => {
                 return <div key={index} className={Styles.RightContainer}>
                   <p className={Styles.SubTitle} >
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
            {/*<p>Статистика с&nbsp;апреля по&nbsp;октябрь 2023&nbsp;г. По&nbsp;данным <a href="" target={'_blank'}>*/}
            {/*  центра <br/> инноваций Future Crew*/}
            {/*</a>, активность сбора информации о&nbsp;действиях <br/> посетителей веб-сайтов выросла вдвое с&nbsp;2021&nbsp;г.</p>*/}
            {windowWidth <= 500 ? <p>Статистика с&nbsp;апреля по&nbsp;ноябрь 2023&nbsp;г. По&nbsp;данным <a href="https://futurecrew.ru/" target={'_blank'}>
              центра инноваций Future Crew
            </a>, активность сбора информации о&nbsp;действиях посетителей веб-сайтов выросла вдвое с&nbsp;2021&nbsp;г.</p>
                : <p>Статистика с&nbsp;апреля по&nbsp;ноябрь 2023&nbsp;г. По&nbsp;данным <a href="https://futurecrew.ru/" target={'_blank'}>
              центра инноваций Future Crew
            </a>, активность<br/> сбора информации о&nbsp;действиях  посетителей веб-сайтов выросла вдвое с&nbsp;2021&nbsp;г.</p> }
          </div>
        </div>
      </div>
    </Container>
  );
};

export { Research };
