import React from 'react';
import Container from '@components/ui/Container/Container';

import Styles from './BlockContent.module.scss';
import { useWindowSize } from '../../hooks/useWindowSize';

const BlockContent = ({ title, text, img, widthImg, heightImg, gradient }) => {
  const { mobileWidth } = useWindowSize();

  return (
    <Container>
      <div className={Styles.Block}>
        <div className={Styles.Left}>
          <div className={Styles.Title}>
            <h2 style={{ backgroundImage: gradient }}>{title}</h2>
          </div>
          <div className={Styles.Text}>
            <p>{text}</p>
          </div>
        </div>
        <div className={Styles.Right}>
          <div className={Styles.Image} style={{ maxWidth: mobileWidth ? 215 : widthImg, maxHeight: mobileWidth ? 215 : heightImg }}>
            {/*<img src={img} width={mobileWidth ? 215 : widthImg} height={mobileWidth ? 215 : heightImg} alt='img' />*/}
            <img src={img} alt='img' />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlockContent;
