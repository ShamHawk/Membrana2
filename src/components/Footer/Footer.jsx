import React from 'react';
import Container from '@components/ui/Container/Container';

import Styles from './Footer.module.scss';

const BlockContent = () => {
  return (
    <div className={Styles.Footer}>
      <Container>
        <div className={Styles.Wrapper}>
          <div className={Styles.LeftLink}>
            <a
              href={
                'https://moskva.mts.ru/about/investoram-i-akcioneram/korporativnoe-upravlenie/dokumenti-pao-mts/politika-obrabotka-personalnih-dannih-v-pao-mts'
              }
              target={'_blank'}
            >
              Политика обработки файлов cookie
            </a>
            <a href={'https://futurecrew.ru/soglasie_na_obrabotky_personalnyh_dannyh.pdf'} target={'_blank'}>
              Политика обработки персональных данных
            </a>
          </div>
          <div className={Styles.RightLink}>
            <a href={'https://futurecrew.ru/'} target={'_blank'}>
              Продукт разработан командой FutureCrew
            </a>
            <p>© 2023. Все права защищены</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlockContent;