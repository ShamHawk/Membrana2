import HeroBlock from './components/HeroBlock/HeroBlock';
import { Research } from './components/Research/Research';
import BlockContent from '@components/BlockContent/BlockContent';
import Container from './components/ui/Container/Container';
import SoundButton from './components/ui/SoundButton/SoundButton';
import FaqBlock from './components/FaqBlock/FaqBlock';
import Footer from './components/Footer/Footer';
import '@assets/styles/index.scss';
import Styles from '@assets/styles/Home.module.scss';
import FormBlock from './components/FormBlock/FormBlock';
import { useRef } from 'react';

const blockContentArr = [
  {
    title: (
        <span>Вредоносный <br/>трафик – мимо</span>
    ),
    text: [
      <span>
        С&nbsp;Membrana сёрфинг в&nbsp;интернете быстрый и&nbsp;безопасный. Мы&nbsp;блокируем подозрительные скрипты и&nbsp;угрозы на&nbsp;сайтах
      </span>,
      <span>
        С&nbsp;Membrana сёрфинг в&nbsp;интернете быстрый и&nbsp;безопасный. Мы&nbsp;блокируем подозрительные скрипты и&nbsp;угрозы на&nbsp;сайтах
      </span>,
    ],
    videoWidth: 494,
    videoHeight: 440,
    video: 'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/1_Privacy-Secure.mp4#t=0.001',
    gradient:
    'linear-gradient(90deg, #FFF -5.87%, rgba(255, 255, 255, 0.90) 6.23%, rgba(255, 255, 255, 0.00) 112.47%);',
    id: 1,
    circlePosition: [-280, 'auto', 'auto', -150],
    circleSize: [613, 613],
  },
  {
    title: (
      <span>
        Спам и&nbsp;скам не&nbsp;пройдут
      </span>
    ),
    text: [
      <span>
       Membrana проверяет звонки и&nbsp;блокирует спам сразу, чтобы вы&nbsp;не&nbsp;тратили на&nbsp;него время. Лишние уведомления вас не&nbsp;побеспокоят
      </span>,
      <span>
       Membrana проверяет звонки и&nbsp;блокирует спам сразу, чтобы вы&nbsp;не&nbsp;тратили на&nbsp;него время. Лишние уведомления вас не&nbsp;побеспокоят
      </span>,
    ],
    videoWidth: 494,
    videoHeight: 440,
    video: 'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/2_Prem-Cnnctn.mp4#t=0.001',
    gradient:
      'linear-gradient(269deg, #FFF 22.74%, rgba(255, 255, 255, 0.90) 35.49%, rgba(255, 255, 255, 0.00) 147.43%);',
    id: 2,
    circlePosition: [-300, -300, 'auto', 'auto'],
    circleSize: [725, 725],
  },
  {
    title: (
      <span>
        Реклама исчезает
      </span>
    ),
    text: [
      <span>
        Только чистый интернет, только суть. Без баннеров и&nbsp;навязчивых ненужных услуг. Выбирайте удобный режим&nbsp;&mdash; &laquo;Классический&raquo;  или &laquo;Усиленный&raquo;&nbsp;&mdash; и&nbsp;наслаждайтесь
      </span>,
      <span>
        Только чистый интернет, только суть. Без баннеров и&nbsp;навязчивых ненужных услуг. Выбирайте удобный режим&nbsp;&mdash; &laquo;Классический&raquo;  или &laquo;Усиленный&raquo;&nbsp;&mdash; и&nbsp;наслаждайтесь
      </span>,
    ],
    videoWidth: 398,
    videoHeight: 398,
    video: 'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/3_Complete-Anonymity.mp4#t=0.001',
    gradient:
      'linear-gradient(269deg, #FFF 22.74%, rgba(255, 255, 255, 0.90) 35.49%, rgba(255, 255, 255, 0.00) 147.43%);',
    id: 3,
    circlePosition: [-150, 'auto', 'auto', -800],
    circleSize: [900, 900],
  },
  {
    title: <>Ваш второй Голос</>,
    text: [
      <span>
       Сервис Голос определит важные звонки. Если вашему близкому прямо сейчас нужен ответ, то&nbsp;он&nbsp;сразу&nbsp;же вас соединит. На&nbsp;несрочные звонки ответит сам и&nbsp;сохранит для вас расшифровку диалога в&nbsp;приложении
      </span>,
      <span>
        Сервис Голос определит важные звонки. Если вашему близкому прямо сейчас нужен ответ, то&nbsp;он&nbsp;сразу&nbsp;же вас соединит. На&nbsp;несрочные звонки ответит сам и&nbsp;сохранит для вас расшифровку диалога в&nbsp;приложении
      </span>,
    ],
    videoWidth: 501,
    videoHeight: 397,
    video: 'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/4_VPN%20(1).mp4#t=0.001',
    gradient:
      'linear-gradient(269deg, #FFF 1.16%, rgba(255, 255, 255, 0.90) 18.67%, rgba(255, 255, 255, 0.00) 172.36%);',
    id: 4,
  },
  {
    title: <span className={Styles.TitleString_4}>Маскировка IP</span>,
    text: [
      <span>
     Получите доступ к&nbsp;любимому зарубежному контенту по&nbsp;безопасному каналу. Меняйте свой текущий&nbsp;IP при посещении ресурсов, все данные шифруются и&nbsp;не&nbsp;передаются третьим компаниям
      </span>,
      <span>
     Получите доступ к&nbsp;любимому зарубежному контенту по&nbsp;безопасному каналу. Меняйте свой текущий&nbsp;IP при посещении ресурсов, все данные шифруются и&nbsp;не&nbsp;передаются третьим компаниям
      </span>,
    ],
    videoWidth: 378,
    videoHeight: 428,
    video: 'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/5_User-Care.mp4#t=0.001',
    gradient:
      ' linear-gradient(90deg, #FFF -4.7%, rgba(255, 255, 255, 0.90) 16.36%, rgba(255, 255, 255, 0.00) 201.18%);',
    id: 5,
    circlePosition: [250, 'auto', 'auto', -800],
    circleSize: [755, 755],
  },



  {
    title: (
      <span>
        Премиум-связь
      </span>
    ),
    text: [
       <ul style={{marginLeft:'15px'}}>
           <li>Безлимитный интернет</li>
           <li>Безлимитные звонки на МТС и 5000 минут для других</li>
           <li>Высокая скорость и&nbsp;качественная связь: дома, в&nbsp;дороге, на&nbsp;концерте</li>
       </ul>
      ,
        <ul style={{marginLeft:'15px'}}>
           <li>Безлимитный интернет</li>
           <li>Безлимитные звонки на МТС и 5000 минут для других</li>
           <li>Высокая скорость и&nbsp;качественная связь: дома, в&nbsp;дороге, на&nbsp;концерте</li>
       </ul>
      ,
    ],
    videoWidth: 554,
    videoHeight: 554,
    video: 'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/8_VirtSecret.mp4#t=0.001',
    gradient:
      'background: linear-gradient(89deg, #FFF -12.79%, rgba(255, 255, 255, 0.90) 1.85%, rgba(255, 255, 255, 0.00) 130.36%);',
    id: 6,
    circlePosition: [-350, -400, 'auto', 'auto'],
    circleSize: [697, 697],
    ul: true,
  },
];

function App() {
  const formBlockRef = useRef(null);

  return (
    <main className={Styles.Block}>

      <HeroBlock formBlockRef={formBlockRef} />
      <Research />
      <Container>
        <div>
          <div className={Styles.Title}>
            <h2>Баланс работы и&nbsp;отдыха.<br/>Ничего лишнего</h2>
          </div>
          {blockContentArr.map((item, index) => (
            <BlockContent
              key={index}
              title={item.title}
              text={item.text}
              video={item.video}
              widthVideo={item.videoWidth}
              heightVideo={item.videoHeight}
              titleHeight={item.titleHeight}
              gradient={item.gradient}
              circlePosition={item.circlePosition}
              circleSize={item.circleSize}
              ul={item.ul}
            />
          ))}
          <FormBlock formBlockRef={formBlockRef} />
          <FaqBlock />
        </div>
      </Container>
      <Footer />
    </main>
  );
}

export default App;
