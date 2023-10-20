import React from 'react';
import Container from '@components/ui/Container/Container';

import Styles from './FormBlock.module.scss';

const BlockContent = () => {
    return (
        <Container>
            <div className={Styles.Block}>
                <div className={Styles.HeadBlock}>
                    <div className={Styles.Title}>
                        <h2>Защитите себя и команду</h2>
                    </div>
                    <div className={Styles.Subtitle}>
                        <p>Заполните контактную информацию, мы свяжемся с вами, расскажем про продукт, покажем Демо.</p>
                    </div>
                </div>
                <div className={Styles.Form}>
                    <div className={Styles.FormContainer}>
                        <input className={Styles.FormInput}/>
                    </div>
                    <div className={Styles.FormContainer}>
                        <input className={Styles.FormInput}/>
                    </div>
                    <div className={Styles.FormContainer}>
                        <input className={Styles.FormInput}/>
                    </div>
                    <div className={Styles.FormContainer}>
                        <input className={Styles.FormInput}/>
                    </div>
                    <div className={Styles.FormContainer}>
                        <input className={Styles.FormInput}/>
                    </div>
                    <div className={Styles.FormContainer}>
                        <input className={Styles.FormInput}/>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default BlockContent;
