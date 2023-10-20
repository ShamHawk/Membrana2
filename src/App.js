import { StartPage } from './components/StartPage/StartPage';
import { Research } from './components/Research/Research';
import BlockContent from '@components/BlockContent/BlockContent';

import Styles from '@assets/styles/Home.module.scss';
import Container from './components/ui/Container/Container';
import FormBlock from "./components/FormBlock/FormBlock";
import FaqBlock from "./components/FaqBlock/FaqBlock";

const blockContentArr = [
  {
    title: 'данные и конфиденциальная информация под защитой',
    text: 'Сервис «Чистый интернет» блокирует рекламный контент на сайтах. Всего есть два режима: «Классический» блокирует рекламу на популярных сайтах, а «усиленный» вообще всю рекламу.',
    img: '/content-img-1.png',
    imgWidth: 494,
    imgHeight: 440,
    id: 1,
  },

  {
    title: 'спамеры больше не отвлекут от важных дел',
    text: 'Сервис блокирует все входящие спам-звонки и подозрительные номера. Информация о заблокированных вызовах будет отражаться в мобильном приложении.',
    img: '/content-img-2.png',
    imgWidth: 494,
    imgHeight: 440,
    id: 2,
  },
];

function App() {
  return (
    <main className={Styles.Block}>
      <Container>
        <StartPage />
        {/*<Research />*/}
        <div>
          <h1 className={Styles.Title}>Ваш work-life balance под защитой</h1>
          {blockContentArr.map((item) => (
            <BlockContent
              title={item.title}
              text={item.text}
              img={item.img}
              widthImg={item.imgWidth}
              heightImg={item.imgHeight}
              titleHeight={item.titleHeight}
            />
          ))}
          <FormBlock/>
          <FaqBlock/>
        </div>
      </Container>
    </main>
  );
}

export default App;
