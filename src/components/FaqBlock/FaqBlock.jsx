import React from 'react';
import Container from '@components/ui/Container/Container';

import Styles from './FagBlock.module.scss';

const BlockContent = () => {
    return (
        <Container>
            <div className={Styles.Block}>
                <div className={Styles.HeadBlock}>
                    <div className={Styles.Title}>
                        <h2>Скоро будет ещё больше возможностей</h2>
                    </div>
                    <div className={Styles.Subtitle}>
                        <p>Мы регулярно разрабатываем новый функционал.</p>
                    </div>
                </div>
                <div className={Styles.HeadBlock}>
                    <div className={Styles.Title}>
                        <h2>Ответы на вопросы</h2>
                    </div>
                </div>
                <div className={Styles.Faq}>
                  <div className={Styles.FaqBlock}>
                      <p className={Styles.FaqText}>
                          Как подключить Membrana?
                      </p>
                  </div>
                </div>
            </div>
        </Container>
    );
};

export default BlockContent;
