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
        Конфиденциальная <br /> информация <br /> под защитой
      </span>
    ),
    text: [
      <span>
        На работе, в отпуске, в командировках
        <br /> наш сервис будет отслеживать угрозы
        <br /> и блокировать запуск вредоносных
        <br /> и подозрительных скриптов
      </span>,
      <span>
        На работе, в отпуске, в командировках
        <br /> наш сервис будет отслеживать угрозы
        <br /> и блокировать запуск вредоносных
        <br /> и подозрительных скриптов
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
        Membrana проверяет звонки
        <br /> от посторонних и блокирует спам. <br /> В приложении можно посмотреть
        <br /> историю вызовов, на которые ответил
        <br /> секретарь,и прочитать расшифровку
        <br /> разговоров
      </span>,
      <span>
        Membrana проверяет звонки от посторонних и блокирует спам. <br /> В приложении можно посмотреть историю вызовов, на которые
        <br /> ответил секретарь,и прочитать расшифровку разговоров
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
        Сервис «Чистый интернет» блокирует
        <br /> рекламный контент на сайтах.
        <br /> Выбирайте удобный режим:
        <br /> «Классический» блокирует рекламу
        <br /> на уровне доменов, а «Усиленный»
        <br /> анализирует и содержимое страниц.
        <br /> Делаем сёрфинг приятным
        <br /> и безопасным
      </span>,
      <span>
        Сервис «Чистый интернет» блокирует рекламный контент
        <br /> на сайтах. Выбирайте удобный режим: «Классический» блокирует
        <br /> рекламу на уровне доменов, а «Усиленный» анализирует и содержимое
        <br /> страниц. Делаем сёрфинг приятным и безопасным
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
    title: 'Виртуальный секретарь ответит на звонки за вас',
    text: [
      <span>
        Искусственный интеллект возьмёт
        <br /> заботы на себя: отсечёт спам сразу,
        <br /> ответит на звонки, когда вы заняты,
        <br /> проанализирует содержание
        <br /> разговоров, и если дело срочное —<br /> соединит с вами
      </span>,
      <span>
        Искусственный интеллект возьмёт заботы на себя:
        <br /> отсечёт спам сразу, ответит на звонки, когда вы заняты,
        <br /> проанализирует содержание разговоров, и если дело
        <br /> срочное — соединит с вами
      </span>,
    ],
    videoWidth: 501,
    videoHeight: 397,
    video: 'https://storage.yandexcloud.net/cdn.tsekh.design/Membrana/benefits/4_VPN%20(1).mp4#t=0.001',
    gradient:
      'conic-gradient(from 253deg at 5% 32.29%, #FFF 0deg, rgba(255, 255, 255, 0.90) 36.81592583656311deg, rgba(255, 255, 255, 0.00) 360deg)',
    id: 4,
  },
  {
    title: <span className={Styles.TitleString_4}>Маскировка IP</span>,
    text: [
      <span>
        C Membrana вы можете пользоваться
        <br /> необходимыми ресурсами
        <br /> и не беспокоиться, что ваши данные
        <br /> окажутся у неизвестной компании
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
        Безлимитный интернет,
        <br /> безлимитные звонки на номера МТС
        <br /> и 5000 минут для других операторов.
        <br /> А также расширенный пакет
        <br /> для раздачи интернета
        <br /> на другие устройства
      </span>,
      <span>
        Безлимитный интернет, безлимитные звонки
        <br /> на номера МТС и 5000 минут для других
        <br /> операторов. А также расширенный пакет
        <br /> для раздачи интернета на другие устройства
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
