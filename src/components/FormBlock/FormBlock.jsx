import React, {useEffect} from 'react';
import Container from '@components/ui/Container/Container';

import Styles from './FormBlock.module.scss';

const BlockContent = () => {
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
                <div className="form-container">
                    <div
                         id="digital_highway"
                         data-product="PL0146"
                         data-vitrine="membrana"
                         data-region="77"
                    >

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default BlockContent;
