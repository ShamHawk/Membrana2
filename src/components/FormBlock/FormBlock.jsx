import { useWindowSize } from '../../hooks/useWindowSize';

import Styles from './FormBlock.module.scss';
import classNames from "classnames";
import {useEffect} from "react";

const BlockContent = ({ formBlockRef }) => {
    const { windowWidth } = useWindowSize();
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
          <h2>Обеспечивает безопасность<br/> и сохранность данных</h2>
        </div>
        <div className={classNames(Styles.Subtitle, Styles.Subtitle_one)}>
            {windowWidth <= 500 ? <p>Membrana позволяет минизимировать риски утечек коммерческой информации</p> :
                <p>Membrana позволяет минизимировать риски утечек коммерческой информации</p>}
        </div>


        <div className={Styles.HeadBlock}>
          <div className={classNames(Styles.Title, Styles.Title_two)}>
            <h2>Позаботьтесь <br/> о команде</h2>
          </div>
          <div className={classNames(Styles.Subtitle, Styles.Subtitle_twoz)}>

              {windowWidth <= 500 ?  <p>Заполните форму — и мы с вами <br/> свяжемся. Покажем возможности <br/> для компаний и организуем  <br/>демо Membrana</p> : <p>Заполните форму — и мы с вами  свяжемся. Покажем возможности <br/> для компаний и организуем демо Membrana</p>}
          </div>
        </div>

          <div className={Styles.FormWrapper}>
        <div className='form-container'>
          <div
            id='digital_highway'
            data-bo-theme={'dark'}
            data-product='PL0146'
            data-bo-hide-extra={'comment attachment email'}
            data-bo-subline={''}
            data-bo-required-inn={'true'}
            data-bo-required-name={'true'}
            data-bo-header={''}
            data-bo-custom-styles="membrana"
            data-vitrine='membrana'
            data-region='77'
          />
        </div>
      </div>
    </div>
  );
};



export default BlockContent;
