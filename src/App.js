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
        Вредоносный <br/>трафик – мимо
      </span>
    ),
    text: [
      <span>
        С&nbsp;Membrana сёрфинг в&nbsp;интернете <br/> быстрый и&nbsp;безопасный. На&nbsp;любом сайте мы&nbsp;блокируем<br/> все угрозы и&nbsp;подозрительные скрипты
      </span>,
      <span>
        С&nbsp;Membrana сёрфинг в&nbsp;интернете быстрый<br/> и&nbsp;безопасный. На&nbsp;любом сайте мы&nbsp;блокируем<br/> все угрозы и&nbsp;подозрительные скрипты
      </span>,
    ],
    videoWidth: 494,
    videoHeight: 440,
    video: 'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/1_Privacy-Secure.mp4#t=0.001',
    gradient:
      'conic-gradient(from 254deg at 0.5% 34.76%, #FFF 0deg, rgba(255, 255, 255, 0.90) 36.81592583656311deg, rgba(255, 255, 255, 0.00) 360deg)',
    id: 1,
    circlePosition: [-280, 'auto', 'auto', -150],
    circleSize: [613, 613],
  },
  {
    title: (
      <span>
        Спамеры <br/> не пройдут
      </span>
    ),
    text: [
      <span>
       Membrana проверяет звонки <br/> от&nbsp;посторонних и&nbsp;блокирует спам.<br/> В&nbsp;приложении можно посмотреть<br/> историю вызовов, на&nbsp;которые ответил<br/> секретарь, и&nbsp;прочитать расшифровку<br/> разговоров
      </span>,
      <span>
       Membrana проверяет звонки от&nbsp;посторонних и&nbsp;блокирует спам.<br/> В&nbsp;приложении можно посмотреть историю вызовов, на&nbsp;которые<br/> ответил секретарь, и&nbsp;прочитать расшифровку разговоров
      </span>,
    ],
    videoWidth: 494,
    videoHeight: 440,
    video: 'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/2_Prem-Cnnctn.mp4#t=0.001',
    gradient:
      'conic-gradient(from 268deg at 0% 34.24%, #FFF 0deg, rgba(255, 255, 255, 0.90) 36.81592583656311deg, rgba(255, 255, 255, 0.00) 360deg)',
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
        Только чистый интернет, только суть.<br/> Без баннеров и&nbsp;навязчивых ненужных <br/> услуг. Выбирайте удобный режим, &laquo;Классический&raquo; или &laquo;Усиленный&raquo;, и&nbsp;наслаждайтесь
      </span>,
      <span>
        Только чистый интернет, только суть. Без баннеров и&nbsp;навязчивых <br/> ненужных услуг. Выбирайте удобный режим, &laquo;Классический&raquo;<br/> или &laquo;Усиленный&raquo;, и&nbsp;наслаждайтесь
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
    title: <>Секретарь за вас</>,
    text: [
      <span>
       Когда вы&nbsp;заняты, на&nbsp;звонки ответит<br/> виртуальный секретарь<br/> с&nbsp;искусственным интеллектом.<br/> Он&nbsp;понимает содержание разговоров <br/> и&nbsp;соединит с&nbsp;вами, если это срочно
      </span>,
      <span>
        Когда вы&nbsp;заняты, на&nbsp;звонки ответит виртуальный секретарь<br/> с&nbsp;искусственным интеллектом. Он&nbsp;понимает содержание<br/> разговоров и&nbsp;соединит с&nbsp;вами, если это срочно
      </span>,
    ],
    videoWidth: 501,
    videoHeight: 397,
    video: 'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/4_VPN%20(1).mp4#t=0.001',
    gradient:
      'conic-gradient(from -42deg at 1.89% 13.05%, #FFF 0deg, rgba(255, 255, 255, 0.90) 36.81592583656311deg, rgba(255, 255, 255, 0.00) 360deg)',
    id: 4,
  },
  {
    title: <span className={Styles.TitleString_4}>Маскировка IP</span>,
    text: [
      <span>
     Подключайтесь из&nbsp;другой страны<br/> на&nbsp;выбор и&nbsp;заходите на&nbsp;любимые <br/> сайты. Ваши данные шифруются<br/> и&nbsp;в&nbsp;безопасности
      </span>,
      <span>
        Подключайтесь из&nbsp;другой страны на&nbsp;выбор и&nbsp;заходите на&nbsp;любимые <br/> сайты. Ваши данные шифруются и&nbsp;в&nbsp;безопасности
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
        Премиум-связь <br/> с безлимитами
      </span>
    ),
    text: [
      <span>
       Безлимитный интернет, безлимитные <br/> звонки на&nbsp;номера МТС и&nbsp;5000 минут <br/> для других операторов. А&nbsp;ещё&nbsp;&mdash; <br/> расширенный пакет для раздачи <br/> интернета на&nbsp;другие устройства
      </span>,
      <span>
        Безлимитный интернет, безлимитные звонки на&nbsp;номера МТС <br/> и&nbsp;5000 минут для других операторов. А&nbsp;ещё&nbsp;&mdash; расширенный <br/> пакет для раздачи интернета на&nbsp;другие устройства
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

      <HeroBlock formBlockRef={formBlockRef} />
      <Research />
      <Container>
        <div>
          <div className={Styles.Title}>
            <h1>Баланс работы и&nbsp;отдыха. <br/> И&nbsp;ничего лишнего</h1>
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
