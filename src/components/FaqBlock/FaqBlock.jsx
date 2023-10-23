import React, {useState} from 'react';
import Container from '@components/ui/Container/Container';

import Styles from './FagBlock.module.scss';
import FagItem from "./FaqItem/FagItem";
const SDFag = [
    {
        title: "Как подключить Membrana?",
        content: <div>
            Чтобы стать абонентом Membrana, вам нужно:
            Получить приглашение со ссылкой на скачивание и реферальным кодом от действующего абонента Membrana
            Скачать приложение Membrana
            Активировать реферальный код-приглашение
        </div>
    },
    {
        title: "Какой пакет интернета, минут и SMS входит в Membrana",
        content: <div>
            Безлимитный интернет и раздача через точку доступа
            Безлимитные звонки на МТС
            5000 минут на звонки абонентам других операторов
            1000 SMS
        </div>
    },
    {
        title: "Есть ли раздача интернета?",
        content: <div>
            Да, в пакет входит 100 ГБ в сутки.
        </div>
    },
    {
        title: "Какая зона покрытия?",
        content: <div>
            Сейчас та же, что и у МТС.
        </div>
    },
    {
        title: "Какие условия в роуминге?",
        content: <div>
            В приложении Membrana вы сможете узнать цены в конкретной стране и заранее рассчитать свои траты в калькуляторе роуминга.
        </div>
    },
    {
        title: "Есть ли eSIM? Как его получить?",
        content: <div>
            В приложении Membrana при заказе вы сможете выбрать вариант eSIM.
            Как её оформить:
            Авторизоваться через Госуслуги
            Подписать договор электронной подписью в приложении Госключ
            Получить QR-код на установку eSIM
        </div>
    },
    {
        title: "Как перейти в Membrana со своим номером?",
        content: <div>
            В приложении Membrana при заказе есть отдельная ветка для перехода со своим номером. Для абонентов МТС это будет просто смена тарифа, а для абонентов других операторов — смена оператора с сохранением номера.
        </div>
    },
    {
        title: "На Membrana могут перейти абоненты других операторов?",
        content: <div>
            Да, конечно.
        </div>
    }, {
        title: "Приложение Membrana создано для iOS и Android? Где его скачать?",
        content: <div>
            Да, для iOS и Android. Приложение будет доступно в Google Play и App Store после запуска.
        </div>
    },
]
const BlockContent = () => {
    const [activeItem, setActiveItem] = useState(null);
    const handleItemClick = (index) => {
        if (activeItem === index) {
            setActiveItem(null); // Закрываем текущий элемент при повторном клике
        } else {
            setActiveItem(index);
        }
    }
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
                            isActive={activeItem === index}
                            onItemClick={() => handleItemClick(index)}
                            title={obj.title}
                            content={obj.content}
                            key={index}
                        />
                    })}
                </div>
            </div>
        </Container>
    );
};

export default BlockContent;
