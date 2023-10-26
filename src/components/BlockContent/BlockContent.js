import React from 'react';
import Container from '@components/ui/Container/Container';

import Styles from './BlockContent.module.scss';
import { useWindowSize } from '../../hooks/useWindowSize';

const BlockContent = ({ title, text, img, imgMobile, widthImg, heightImg, gradient }) => {
  const { mobileWidth, smallMobileWidth } = useWindowSize();

  return (
    <div className={Styles.Block}>
      <div className={Styles.Left}>
        <div className={Styles.Title}>
          <h2 style={{ backgroundImage: gradient }}>{title}</h2>
        </div>
        <div className={Styles.Text}>
          <p>{mobileWidth ? text[0] : text[1]}</p>
        </div>
      </div>
      <div className={Styles.Right}>
        <div className={Styles.Image} style={{ maxWidth: mobileWidth ? 215 : widthImg, maxHeight: mobileWidth ? 215 : heightImg }}>
          <picture>
            <source media='(max-width: 500px)' srcSet={imgMobile} />
            <img src={img} alt='img' />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default BlockContent;
