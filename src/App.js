import HeroBlock from './components/HeroBlock/HeroBlock';
import { Research } from './components/Research/Research';
import BlockContent from '@components/BlockContent/BlockContent';
import Container from './components/ui/Container/Container';
import SoundButton from './components/ui/SoundButton/SoundButton';
import FaqBlock from './components/FaqBlock/FaqBlock';
import Footer from './components/Footer/Footer';

import '@assets/styles/index.scss';
import Styles from '@assets/styles/Home.module.scss';
import FormBlock from "./components/FormBlock/FormBlock";

const blockContentArr = [
  {
    title: <span>конфиденциальная информация под защитой</span>,
    text: (
      <span>
        На работе, в отпуске, в командировках наш сервис будет отслеживать угрозы и блокировать запуск вредоносных и подозрительных скриптов
      </span>
    ),
    img: 'content-img-1.png',
    imgWidth: 494,
    imgHeight: 440,
    gradient:
      'conic-gradient(from 254deg at 5.35% 34.76%, #FFF 0deg, rgba(255, 255, 255, 0.90) 36.81592583656311deg, rgba(255, 255, 255, 0.00) 360deg)',
    id: 1,
  },

  {
    title: (
      <span>
        спамеры больше <br /> не отвлекут
        <br /> от важных дел
      </span>
    ),
    text: (
      <span>
        Membrana проверяет звонки от посторонних <br /> и блокирует спам. В приложении можно посмотреть историю вызовов, на которые ответил
        секретарь,
        <br /> и прочитать расшифровку разговоров
      </span>
    ),
    img: 'content-img-2.png',
    imgWidth: 494,
    imgHeight: 440,
    gradient:
      'conic-gradient(from 268deg at 14.78% 38.24%, #FFF 0deg, rgba(255, 255, 255, 0.90) 36.81592583656311deg, rgba(255, 255, 255, 0.00) 360deg)',
    id: 2,
  },
  {
    title: (
      <span>
        реклама исчезнет
        <br /> <span className={Styles.TitleString_3}>по вашему желанию</span>
      </span>
    ),
    text: (
      <span>
        Сервис «Чистый интернет» блокирует рекламный контент на сайтах. Выбирайте удобный режим: «Классический» блокирует рекламу на уровне
        доменов, а «Усиленный» анализирует
        <br /> и содержимое страниц.
        <br /> Делаем сёрфинг приятным и безопасным
      </span>
    ),
    img: 'content-img-3.png',
    imgWidth: 398,
    imgHeight: 398,
    gradient:
      'conic-gradient(from -82deg at 0% 59.78%, #FFF 0deg, rgba(255, 255, 255, 0.90) 36.81592583656311deg, rgba(255, 255, 255, 0.00) 360deg)',
    id: 3,
  },
  {
    title: 'виртуальный секретарь ответит на звонки за вас',
    text: (
      <span>
        Искусственный интеллект возьмёт заботы на себя: отсечёт спам сразу, ответит на звонки, когда вы заняты, проанализирует содержание
        разговоров,
        <br /> и если дело срочное — соединит с вами
      </span>
    ),
    img: 'content-img-4.png',
    imgWidth: 501,
    imgHeight: 397,
    gradient:
      'conic-gradient(from 253deg at 9.08% 32.29%, #FFF 0deg, rgba(255, 255, 255, 0.90) 36.81592583656311deg, rgba(255, 255, 255, 0.00) 360deg)',
    id: 4,
  },
  {
    title: 'маскировка IP',
    text: (
      <span>
        C Membrana вы можете пользоваться
        <br /> необходимыми ресурсами и не беспокоиться,
        <br /> что ваши данные окажутся у неизвестной
        <br /> компании
      </span>
    ),
    img: 'content-img-5.png',
    imgWidth: 378,
    imgHeight: 428,
    gradient:
      'conic-gradient(from -24deg at 28.82% 8.82%, #FFF 0deg, rgba(255, 255, 255, 0.90) 36.81592583656311deg, rgba(255, 255, 255, 0.00) 360deg)',
    id: 5,
  },
  {
    title: (
      <span>
        премиум-связь
        <br /> с безлимитами
      </span>
    ),
    text: (
      <span>
        Безлимитный интернет, безлимитные звонки
        <br /> на номера МТС и 5000 минут для других
        <br /> операторов. А также расширенный пакет
        <br /> для раздачи интернета на другие устройства
      </span>
    ),
    img: 'content-img-6.png',
    imgWidth: 554,
    imgHeight: 554,
    gradient:
      'conic-gradient(from -82deg at 5.73% 50.66%, #FFF 0deg, rgba(255, 255, 255, 0.90) 36.81592583656311deg, rgba(255, 255, 255, 0.00) 360deg)',
    id: 6,
  },
];

function App() {
  return (
    <main className={Styles.Block}>
      {/*<Header />*/}
      <HeroBlock />
      <Research />
      <Container>
        <div>
          <div className={Styles.Title}>
            <h1>Membrana защитит ваши данные</h1>
          </div>
          {blockContentArr.map((item , index) => (
            <BlockContent
              key={index}
              title={item.title}
              text={item.text}
              img={item.img}
              widthImg={item.imgWidth}
              heightImg={item.imgHeight}
              titleHeight={item.titleHeight}
              gradient={item.gradient}
            />
          ))}
          <FormBlock />
          <FaqBlock />
        </div>
      </Container>
      <SoundButton />
      <Footer />
    </main>
  );
}

export default App;
