import React, { useEffect } from 'react';
import Container from '@components/ui/Container/Container';

import Styles from './FormBlock.module.scss';
import classNames from 'classnames';

const BlockContent = ({ formBlockRef }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://digitalb2b.mts.ru/widget/app.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={Styles.Block} ref={formBlockRef}>
      <div className={classNames(Styles.Title, Styles.Title_one)}>
        <h2>
          Ваши данные —<br /> это ваша собственность
        </h2>
      </div>
      <div className={classNames(Styles.Subtitle, Styles.Subtitle_one)}>
        <p>Мы гарантируем, что они не используются для монетизации и не передаются третьим лицам.</p>
      </div>

      <div className={Styles.HeadBlock}>
        <div className={classNames(Styles.Title, Styles.Title_two)}>
          <h2>Позаботьтесь о команде</h2>
        </div>
        <div className={classNames(Styles.Subtitle, Styles.Subtitle_twoz)}>
          <p>Заполните контактную информацию, мы свяжемся с вами, расскажем про продукт, покажем Демо.</p>
        </div>
      </div>
      {/*<div className={Styles.Form}>*/}
      {/*    <div className={Styles.FormContainer}>*/}
      {/*        <input type={"text"} placeholder={'Контактное лицо*'} className={Styles.FormInput}/>*/}
      {/*    </div>*/}
      {/*    <div className={Styles.FormContainer}>*/}
      {/*        <input type={"text"} placeholder={'Номер для связи*'} className={Styles.FormInput}/>*/}
      {/*    </div>*/}
      {/*    <div className={Styles.FormContainer}>*/}
      {/*        <input type={"text"} placeholder={'Название компании или ИНН*'} className={Styles.FormInput}/>*/}
      {/*    </div>*/}
      {/*    <div className={Styles.FormContainer}>*/}
      {/*        <input type={"text"} placeholder={'Количество сотрудников*'} className={Styles.FormInput}/>*/}
      {/*    </div>*/}
      {/*    <div className={Styles.FormContainer}>*/}
      {/*        <input type={"text"} placeholder={'Комментарий'} className={Styles.FormInput}/>*/}
      {/*    </div>*/}
      {/*</div>*/}
      <div className={Styles.FormWrapper}>
        <div className={Styles.FormBlur}></div>
        <div className='form-container'>
          <div
            id='digital_highway'
            data-bo-theme={'dark'}
            data-product='PL0146'
            // data-bo-custom-styles="tb"
            data-vitrine='membrana'
            data-region='77'
          />
        </div>
      </div>
    </div>
  );
};

export default BlockContent;
