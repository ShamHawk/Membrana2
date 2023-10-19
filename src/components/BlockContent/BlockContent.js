import React from 'react';
import Container from '@components/ui/Container/Container';

import Styles from './BlockContent.module.scss';

const BlockContent = ({ title, text, img, widthImg, heightImg, titleHeight }) => {
  return (
    <Container>
      <div className={Styles.Block}>
        <div className={Styles.Left}>
          <div className={Styles.Title}>
            <h2 style={{ height: titleHeight }}>{title}</h2>
          </div>
          <div className={Styles.Text}>
            <p>{text}</p>
          </div>
        </div>
        <div className={Styles.Right}>
          <img src={img} width={widthImg} height={heightImg} alt='img' />
        </div>
      </div>
    </Container>
  );
};

export default BlockContent;
