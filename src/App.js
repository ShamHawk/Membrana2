import HeroBlock from './components/HeroBlock/HeroBlock';
import { Research } from './components/Research/Research';
import BlockContent from '@components/BlockContent/BlockContent';
import Container from './components/ui/Container/Container';
import SoundButton from './components/ui/SoundButton/SoundButton';
import FormBlock from './components/FormBlock/FormBlock';
import FaqBlock from './components/FaqBlock/FaqBlock';
import Footer from './components/Footer/Footer';

import '@assets/styles/index.scss';
import Styles from '@assets/styles/Home.module.scss';

const blockContentArr = [
  {
    title: 'данные и конфиденциальная информация под защитой',
    text: 'Сервис «Чистый интернет» блокирует рекламный контент на сайтах. Всего есть два режима: «Классический» блокирует рекламу на популярных сайтах, а «усиленный» вообще всю рекламу.',
    img: 'content-img-1.png',
    imgWidth: 494,
    imgHeight: 440,
    gradient:
      'conic-gradient(from -87deg at 8.22% 55.88%, #FFF 0deg, rgba(255, 255, 255, 0.90) 36.81592583656311deg, rgba(255, 255, 255, 0.00) 360deg)',
    id: 1,
  },

  {
    title: 'спамеры больше не отвлекут от важных дел',
    text: 'Сервис блокирует все входящие спам-звонки и подозрительные номера. Информация о заблокированных вызовах будет отражаться в мобильном приложении.',
    img: 'content-img-2.png',
    imgWidth: 494,
    imgHeight: 440,
    gradient:
      'conic-gradient(from 268deg at 14.78% 38.24%, #FFF 0deg, rgba(255, 255, 255, 0.90) 36.81592583656311deg, rgba(255, 255, 255, 0.00) 360deg)',
    id: 2,
  },
  {
    title: 'реклама исчезнет по вашему желанию',
    text: 'Сервис «Чистый интернет» блокирует рекламный контент на сайтах. Всего есть два режима: «Классический» блокирует рекламу на популярных сайтах, а «усиленный» вообще всю рекламу.',
    img: 'content-img-3.png',
    imgWidth: 398,
    imgHeight: 398,
    gradient:
      'conic-gradient(from -82deg at 0% 59.78%, #FFF 0deg, rgba(255, 255, 255, 0.90) 36.81592583656311deg, rgba(255, 255, 255, 0.00) 360deg)',
    id: 3,
  },
  {
    title: 'виртуальный секретарь решит все, пока вас нет',
    text: 'Как настоящий, но только виртуальный секретарь возьмет заботы на себя: распознает срочность звонка, если он важный, то соединить сразу с пользователем, определит спам на этапе дозвона.',
    img: 'content-img-4.png',
    imgWidth: 501,
    imgHeight: 397,
    gradient:
      'conic-gradient(from 253deg at 9.08% 32.29%, #FFF 0deg, rgba(255, 255, 255, 0.90) 36.81592583656311deg, rgba(255, 255, 255, 0.00) 360deg)',
    id: 4,
  },
  {
    title: 'маскировка IP',
    text: 'Наш сервис позволяет посещать те ресурсы, которые вам необходимы, и не беспокоиться о том, что ваши данные окажутся у неизвестной компании. А ваша активность не отслеживается.',
    img: 'content-img-5.png',
    imgWidth: 378,
    imgHeight: 428,
    gradient:
      'conic-gradient(from -24deg at 28.82% 8.82%, #FFF 0deg, rgba(255, 255, 255, 0.90) 36.81592583656311deg, rgba(255, 255, 255, 0.00) 360deg)',
    id: 5,
  },
  {
    title: 'премиум-связь с безлимитами',
    text: 'Безлимитный мобильный интернет, безлимитные звонки на номера МТС, а еще 5000 минут для других операторов.',
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
          {blockContentArr.map((item, index) => (
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
          {/*<FormBlock />*/}
          <FaqBlock />
        </div>
      </Container>
      <SoundButton />
      <Footer />
    </main>
  );
}

export default App;
