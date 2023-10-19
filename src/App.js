import { StartPage } from './components/StartPage/StartPage';
import { Research } from './components/Research/Research';
import BlockContent from '@components/BlockContent/BlockContent';
// import { AdvertisementBlock } from "./components/AdvertisementBlock/AdvertisementBlock";

const blockContentArr = [
  {
    title: 'данные и конфиденциальная информация под защитой',
    text: 'Сервис «Чистый интернет» блокирует рекламный контент на сайтах. Всего есть два режима: «Классический» блокирует рекламу на популярных сайтах, а «усиленный» вообще всю рекламу.',
    img: '/content-img-1.png',
    imgWidth: 494,
    imgHeight: 440,

    id: 1,
  },
];

function App() {
  return (
    <div>
      <StartPage />
      <Research />
      <div>
        <h1>Ваш work-life balance под защитой</h1>
        {blockContentArr.map((item) => (
          <BlockContent title={item.title} text={item.text} img={item.img} widthImg={item.imgWidth} heightImg={item.imgHeight} />
        ))}
      </div>
    </div>
  );
}

export default App;
