import React from 'react';
import Container from '@components/ui/Container/Container';

import Styles from './FagBlock.module.scss';
import FagItem from "./FaqItem/FagItem";
const SDFag = [
    {
        title: "Как подключить Membrana?",
        content: ''
    },
    {
        title: "Какой пакет интернета, минут и SMS входит в Membrana",
        content: ''
    },
    {
        title: "Есть ли раздача интернета?",
        content: ''
    },
    {
        title: "Какая зона покрытия?",
        content: ''
    },
    {
        title: "Какие условия в роуминге?",
        content: ''
    },
    {
        title: "Есть ли eSIM? Как его получить?",
        content: ''
    },
    {
        title: "Как перейти в Membrana со своим номером?",
        content: ''
    },
    {
        title: "На Membrana могут перейти абоненты других операторов?",
        content: ''
    }, {
        title: "Приложение Membrana создано для iOS и Android? Где его скачать?",
        content: ''
    },
]
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
                    {SDFag.map((obj,index) => {
                        return <FagItem
                            title={obj.title}
                            key={index}
                        />
                    })}
                </div>
            </div>
        </Container>
    );
};

export default BlockContent;
