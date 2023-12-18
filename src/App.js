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
      <span>
        Информация останется конфиденциальной
      </span>
    ),
    text: [
      <span>
       На&nbsp;работе, в&nbsp;отпуске, в&nbsp;командировках наш сервис отследит угрозы и&nbsp;заблокирует подозрительные скрипты
      </span>,
      <span>
       На&nbsp;работе, в&nbsp;отпуске, в&nbsp;командировках наш сервис отследит угрозы и&nbsp;заблокирует подозрительные скрипты
      </span>,
    ],
    videoWidth: 494,
    videoHeight: 440,
    video: 'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/1_Privacy-Secure.mp4#t=0.001',
    gradient:
      'conic-gradient(from 254deg at 1.35% 34.76%, #FFF 0deg, rgba(255, 255, 255, 0.90) 36.81592583656311deg, rgba(255, 255, 255, 0.00) 360deg)',
    id: 1,
    circlePosition: [-280, 'auto', 'auto', -150],
    circleSize: [613, 613],
  },

  {
    title: (
      <span>
        Спамеры больше <br /> не отвлекут
        <br /> от важных дел
      </span>
    ),
    text: [

      <span>
        {/*Membrana проверяет звонки*/}
        {/*<br /> от посторонних и блокирует спам. <br /> В приложении можно посмотреть*/}
        {/*<br /> историю вызовов, на которые ответил*/}
        {/*<br /> секретарь,и прочитать расшифровку*/}
        {/*<br /> разговоров*/}

        Membrana проверяет звонки и&nbsp;блокирует спам сразу,  чтобы вы&nbsp;не&nbsp;тратили на&nbsp;него время. Лишние уведомления вас не&nbsp;побеспокоят
      </span>,
      <span>
        Membrana проверяет звонки и&nbsp;блокирует спам сразу,  чтобы вы&nbsp;не&nbsp;тратили на&nbsp;него время. Лишние уведомления вас не&nbsp;побеспокоят
      </span>,
    ],
    videoWidth: 494,
    videoHeight: 440,
    video: 'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/2_Prem-Cnnctn.mp4#t=0.001',
    gradient:
      'conic-gradient(from 268deg at 4% 34.24%, #FFF 0deg, rgba(255, 255, 255, 0.90) 36.81592583656311deg, rgba(255, 255, 255, 0.00) 360deg)',
    id: 2,
    circlePosition: [-300, -300, 'auto', 'auto'],
    circleSize: [725, 725],
  },
  {
    title: (
      <span>
        Реклама исчезнет
        <br /> <span className={Styles.TitleString_3}>по вашему желанию</span>
      </span>
    ),
    text: [
      <span>
       У&nbsp;сервиса &laquo;Чистый интернет&raquo; есть два режима: &laquo;Классический&raquo; работает на&nbsp;уровне доменов, а&nbsp;&laquo;Усиленный&raquo;&nbsp;&mdash; анализирует контент страниц. Сёрфинг станет приятным и&nbsp;безопасным
      </span>,
      <span>
       У&nbsp;сервиса &laquo;Чистый интернет&raquo; есть два режима: &laquo;Классический&raquo; работает на&nbsp;уровне доменов, а&nbsp;&laquo;Усиленный&raquo;&nbsp;&mdash; анализирует контент страниц. Сёрфинг станет приятным и&nbsp;безопасным
      </span>,
    ],
    videoWidth: 398,
    videoHeight: 398,
    video: 'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/3_Complete-Anonymity.mp4#t=0.001',
    gradient:
      'conic-gradient(from -82deg at 0% 59.78%, #FFF 0deg, rgba(255, 255, 255, 0.90) 36.81592583656311deg, rgba(255, 255, 255, 0.00) 360deg)',
    id: 3,
    circlePosition: [-150, 'auto', 'auto', -800],
    circleSize: [900, 900],
  },
  {
    title: <>Ответит на&nbsp;звонки за&nbsp;вас</>,
    text: [
      <span>
        Сервис &laquo;Голос&raquo; определит важные звонки. Если вашему близкому прямо сейчас нужен ответ, то&nbsp;он&nbsp;тут&nbsp;же вас соединит. На&nbsp;несрочные звонки&nbsp;&mdash; ответит сам и&nbsp;сохранит для вас расшифровку диалога в&nbsp;приложении
      </span>,
      <span>
        Сервис &laquo;Голос&raquo; определит важные звонки. Если вашему близкому прямо сейчас нужен ответ, то&nbsp;он&nbsp;тут&nbsp;же вас соединит. На&nbsp;несрочные звонки&nbsp;&mdash; ответит сам и&nbsp;сохранит для вас расшифровку диалога в&nbsp;приложении
      </span>,
    ],
    videoWidth: 501,
    videoHeight: 397,
    video: 'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/4_VPN%20(1).mp4#t=0.001',
    gradient:
      'conic-gradient(from 253deg at 1% 32.29%, rgb(255, 255, 255) 0deg, rgba(255, 255, 255, 0.9) 36.8159deg, rgba(255, 255, 255, 0) 360deg)',
    id: 4,
  },
  {
    title: <span className={Styles.TitleString_4}>Маскировка IP</span>,
    text: [
      <span>
      Мы разработали собственный, легальный VPN, чтобы вы могли пользоваться зарубежными сервисами по безопасному каналу и были уверены в сохранности своих данных
      </span>,
      <span>
        C Membrana вы можете пользоваться
        <br /> необходимыми ресурсами и не беспокоиться,
        <br /> что ваши данные окажутся у неизвестной компании
      </span>,
    ],
    videoWidth: 378,
    videoHeight: 428,
    video: 'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/5_User-Care.mp4#t=0.001',
    gradient:
      'conic-gradient(from -24deg at 28.82% 8.82%, #FFF 0deg, rgba(255, 255, 255, 0.90) 36.81592583656311deg, rgba(255, 255, 255, 0.00) 360deg)',
    id: 5,
    circlePosition: [250, 'auto', 'auto', -800],
    circleSize: [755, 755],
  },
  {
    title: (
      <span>
        Премиум-связь
        <br /> с безлимитами
      </span>
    ),
    text: [
      <span>
     Безлимитный интернет. Безлимитные звонки на&nbsp;МТС и&nbsp;5000 минут для других. Высокая скорость и&nbsp;качественная связь: в&nbsp;дороге, офисе, на&nbsp;встрече
      </span>,
      <span>
     Безлимитный интернет. Безлимитные звонки на&nbsp;МТС и&nbsp;5000 минут для других. Высокая скорость и&nbsp;качественная связь: в&nbsp;дороге, офисе, на&nbsp;встрече
      </span>,
    ],
    videoWidth: 554,
    videoHeight: 554,
    video: 'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/8_VirtSecret.mp4#t=0.001',
    gradient:
      'conic-gradient(from -82deg at 2.73% 50.66%, #FFF 0deg, rgba(255, 255, 255, 0.90) 36.81592583656311deg, rgba(255, 255, 255, 0.00) 360deg)',
    id: 6,
    circlePosition: [-350, -400, 'auto', 'auto'],
    circleSize: [697, 697],
  },
];

function App() {
  const formBlockRef = useRef(null);

  return (
    <main className={Styles.Block}>
      {/*<Header />*/}
      <HeroBlock formBlockRef={formBlockRef} />
      <Research />
      <Container>
        <div>
          <div className={Styles.Title}>
            <h1>Membrana защитит ваши данные</h1>
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
            />
          ))}
          <FormBlock formBlockRef={formBlockRef} />
          <FaqBlock />
        </div>
      </Container>
      <SoundButton />
      <Footer />
    </main>
  );
}

export default App;
