import { useWindowSize } from '../../hooks/useWindowSize';

import Styles from './FormBlock.module.scss';
import classNames from "classnames";
import {useEffect} from "react";
import CheckBox from "../ui/CheckBox/CheckBox";

const BlockContent = ({ formBlockRef }) => {
    const { windowWidth } = useWindowSize();
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://digitalb2b.mts.ru/widget/app.js';
  //   script.async = true;
  //   document.body.appendChild(script);
  //
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
      <div className={Styles.Block} ref={formBlockRef}>
        <div className={classNames(Styles.Title, Styles.Title_one)}>
          <h2>Ваши данные —<br/> это ваша собственность</h2>
        </div>
        <div className={classNames(Styles.Subtitle, Styles.Subtitle_one)}>
            {windowWidth <= 500 ? <p>Мы гарантируем, что они <br/> не используются для монетизации <br/> и не передаются третьим лицам</p> :
                <p>Мы гарантируем, что они не используются для монетизации и не передаются третьим лицам.</p>}
        </div>


        <div className={Styles.HeadBlock}>
          <div className={classNames(Styles.Title, Styles.Title_two)}>
              {windowWidth <= 500   ?<h2>
                  Вступайте в&nbsp;закрытый клуб Membrana
              </h2> : <h2>
                  Вступайте в&nbsp;закрытый <br/> клуб Membrana
              </h2>}
          </div>
          <div className={classNames(Styles.Subtitle, Styles.Subtitle_twoz)}>

              {/*{windowWidth <= 500 ?  <p>Заполните форму — и мы с вами <br/> свяжемся. Покажем возможности <br/> для компаний и организуем  <br/>демо Membrana</p> : <p>Заполните форму — и мы с вами  свяжемся. Покажем возможности <br/> для компаний и организуем демо Membrana</p>}*/}
              <p>
                  Заполните форму&nbsp;&mdash; и&nbsp;мы&nbsp;с&nbsp;вами свяжемся.<br/>
                  Первая тысяча пользователей получит кастомную SIM-карту<br/>
                  Membrana в&nbsp;эксклюзивном конверте от&nbsp;нашей команды
              </p>
          </div>
        </div>

          <div className={Styles.FormWrapper}>
              <div className={Styles.Form}>
                  <div className={Styles.FormContainer}>
                      <input type={"text"} placeholder={'Контактное лицо*'} className={Styles.FormInput}/>
                  </div>
                  <div className={Styles.FormContainer}>
                      <input type={"text"} placeholder={'Номер для связи*'} className={Styles.FormInput}/>
                  </div>
                  <div className={Styles.FormContainer}>
                      <input type={"text"} placeholder={'Комментарий'} className={Styles.FormInput}/>
                  </div>
                  <div className={Styles.CheckBoxContainer}>
                      <CheckBox/><p className={Styles.textApprove}>Я&nbsp;выражаю своё согласие на&nbsp;обработку персональных данных, а&nbsp;также подтверждаю факт ознакомления с&nbsp;Политикой обработки персональных данных</p>
                  </div>
                  <div className={Styles.ButtonContainer}>
                      <button className={Styles.Btn} >
                          отправить
                      </button>
                  </div>
              </div>
      </div>
    </div>
  );
};

export default BlockContent;
