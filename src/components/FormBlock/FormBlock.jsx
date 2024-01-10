import React, {useEffect, useState} from "react";
import { useWindowSize } from '../../hooks/useWindowSize';
import * as yup from 'yup';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


import Styles from './FormBlock.module.scss';
import classNames from "classnames";


import axios from "axios";

const BlockContent = ({ formBlockRef }) => {
    const { windowWidth } = useWindowSize();
    const [isChecked, setIsChecked] = useState(false);
    const instance = axios.create({
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers",
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        withCredentials: false,
    });
    const cleanPhoneNumber = (value) => {
        const cleanedValue = value.replace(/[\s()-]/g, '');
        return cleanedValue;
    };

    //  const schemaForm = yup.object().shape({
    //     name: yup
    //         .string()
    //         .required('Введите имя')
    //         .matches(/^([^0-9]*)$/, 'Имя не должно содержать цифр'),
    //      phone: yup.string().min(12, 'Введите корректный телефон').transform(cleanPhoneNumber),
    //     email: yup.string().required('Введите почту').email('Ведите корректную почту'),
    //      message: yup.string(),
    //      agreement: yup.boolean().oneOf([true], 'обязательное поле'),
    // });

    const schemaForm = yup.object().shape({
        name: yup
            .string()
            .required('Введите имя')
            .matches(/^([^0-9]*)$/, 'Имя не должно содержать цифр'),
        phone: yup.string().min(12, 'Введите корректный телефон').transform(cleanPhoneNumber),
        email: yup.string().required('Введите почту').email('Ведите корректную почту'),
        message: yup.string(),
        agreement: yup.boolean().oneOf([true], 'обязательное поле'),
    });


    // const formSubmit = (data) => {
    //     // const newData = JSON.parse(data)
    //     axios.post(data)
    //     console.log(data)
    // }


const test =  {
    "apikey" : "18WH7YhvxJb26UVZSIJhozKpThuhP7k7TnERRxnHCQMecr9bjrbbAi9zRDa3mo5bP1RtWtA"
    ,"action" : "member.set"
    ,"email": "trohin.danil2015@yandex.ru"
    ,"addr_type" : "email"
    ,"source" : "81.23.182.239"
    ,"newbie.confirm": "0"
    ,"datakey" : [
        [ "base.firstName", "set", "dima" ]
    ]
    ,"return_fresh_obj" : "0"
}

    const formSubmit = (data) => {
    const distData =  Object.values(data)
        console.log(distData);
    const email = distData[2]
    const name = distData[4]
        const newData =  {
            "apikey" : "18WH7YhvxJb26UVZSIJhozKpThuhP7k7TnERRxnHCQMecr9bjrbbAi9zRDa3mo5bP1RtWtA"
            ,"action" : "member.set"
            ,"email": email
            ,"addr_type" : "email"
            ,"source" : "81.23.182.239"
            ,"newbie.confirm": "0"
            ,"datakey" : [
                [ "base.firstName", "set", name ]
            ]
            ,"return_fresh_obj" : "0"
        }
        return instance
            .post('https://api.sendsay.ru/general/api/v100/json/x_1702990490671778', {newData} )
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.error('Ошибка при отправке запроса formSubmits:', error);
                throw error;
            });

        // console.log('data',data)
        // console.log('newData',newData)

    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(schemaForm),
    });
  return (
      <div className={Styles.Block} >
        <div className={classNames(Styles.Title, Styles.Title_one)}>
          <h2>Ваши данные —<br/> это ваша собственность</h2>
        </div>
        <div className={classNames(Styles.Subtitle, Styles.Subtitle_one)}>

            {windowWidth <= 500 ? <p>Мы&nbsp;гарантируем, что они не&nbsp;используются для монетизации и&nbsp;не&nbsp;передаются третьим лицам</p> :
                <p>Мы&nbsp;гарантируем, что они не&nbsp;используются для монетизации <br/> и&nbsp;не&nbsp;передаются третьим лицам</p>}
        </div>
        <div className={Styles.HeadBlock} ref={formBlockRef} >
          <div className={classNames(Styles.Title, Styles.Title_two)}>
              {windowWidth <= 500   ?<h2>
                  Вступайте в&nbsp;закрытый клуб Membrana
              </h2> : <h2>
                  Вступайте в&nbsp;закрытый <br/> клуб Membrana
              </h2>}
          </div>
          <div className={classNames(Styles.Subtitle, Styles.Subtitle_two)}>
              {windowWidth <= 500 ?  <p>Заполните форму&nbsp;&mdash; и&nbsp;мы&nbsp;с&nbsp;вами свяжемся после старта продаж. Первая тысяча пользователей получит кастомную SIM-карту Membrana в&nbsp;эксклюзивном конверте от&nbsp;нашей команды </p> : <p>Заполните форму&nbsp;&mdash; и&nbsp;мы&nbsp;с&nbsp;вами свяжемся после старта продаж.<br/> Первая тысяча пользователей получит кастомную SIM-карту <br/> Membrana в&nbsp;эксклюзивном конверте от&nbsp;нашей команды</p>}
          </div>
        </div>
          <div className={Styles.FormWrapper} >
              {/*<form className={Styles.formBlock}  onSubmit={handleSubmit(formSubmit)}>*/}
              {/*    <div className={Styles.Form}>*/}
              {/*        <div className={ classNames(errors['name'] ? Styles.errorsInput : null,Styles.FormContainer)}>*/}
              {/*            <input id={'name'} {...register("name")} type={"text"} placeholder={'ФИО*'} className={Styles.FormInput}/>*/}
              {/*            {errors['name'] && <div className={Styles.errorText}>{  errors['name']?.message}</div>}*/}
              {/*        </div>*/}
              {/*        <div  className={ classNames(errors['tel'] ? Styles.errorsInput : null,Styles.FormContainer)}>*/}
              {/*            /!*<input id={'tel'} {...register("tel")} type={"text"} placeholder={'Номер для связи*'} className={Styles.FormInput}/>*!/*/}
              {/*            <InputMask*/}
              {/*                mask='+7 (999) 999-99-99'*/}
              {/*                maskChar=' '*/}
              {/*                id={'phone'}*/}
              {/*                {...register("phone")}*/}
              {/*                placeholder={'Номер телефона*'}*/}
              {/*                className={Styles.FormInput}*/}
              {/*            />*/}
              {/*            {errors['tel'] && <div className={Styles.errorText}>{  errors['tel']?.message}</div>}*/}
              {/*        </div>*/}
              {/*        <div className={ classNames(errors['name'] ? Styles.errorsInput : null,Styles.FormContainer)}>*/}
              {/*            <input id={'email'} {...register("email")} type={"text"} placeholder={'Почта*'} className={Styles.FormInput}/>*/}
              {/*            {errors['email'] && <div className={Styles.errorText}>{  errors['email']?.message}</div>}*/}
              {/*        </div>*/}
              {/*        <div className={Styles.FormContainer}>*/}
              {/*            <input id={'message'} {...register("message")} type={"text"} placeholder={'Комментарий'} className={Styles.FormInput}/>*/}
              {/*        </div>*/}
              {/*        <div  className={Styles.CheckBoxContainer}>*/}
              {/*            <div style={{display:"flex"}}>*/}
              {/*                <div className={Styles.CheckBox}>*/}
              {/*                    <input*/}
              {/*                        type='checkbox'*/}
              {/*                        checked={isChecked}*/}
              {/*                        id={'agreement'}*/}
              {/*                        {...register('agreement')}*/}
              {/*                        onClick={() => setIsChecked(prev => !prev)}*/}
              {/*                        // onChange={}*/}
              {/*                    />*/}

              {/*                </div>*/}
              {/*                <p className={Styles.textApprove}>Я&nbsp;выражаю своё согласие на&nbsp;обработку персональных данных, а&nbsp;также подтверждаю факт ознакомления с&nbsp;Политикой обработки персональных данных</p>*/}
              {/*            </div>*/}

              {/*            {errors['agreement'] && <div className={Styles.errorText}>{  errors['checkbox']?.message}</div>}*/}
              {/*        </div>*/}
              {/*        <div className={Styles.ButtonContainer}>§*/}
              {/*            <button type={'submit'} className={Styles.Btn} >*/}
              {/*                отправить*/}
              {/*            </button>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</form>*/}
              {/*<div className={Styles.FormSendsey} data-sendsay-form-embedded="x_1702990490671778/1"></div>*/}
              <div  className={Styles.FormSendsey} data-sendsay-form-embedded="mts_sendmail/6"></div>
              {/*<div className={Styles.testicks}>*/}
              {/*    <form className={Styles.newForm}  action="https://sendsay.ru/form/mts_sendmail/6/" method="post">*/}
              {/*        <label className={Styles.newForm__labelInput}>*/}
              {/*            <input placeholder={"Email*"} className={Styles.newForm__input} name="_member_email"/>*/}
              {/*        </label>*/}
              {/*        <label className={Styles.newForm__labelInput}>*/}
              {/*            <input placeholder={"Контактное лицо*"} className={Styles.newForm__input} type="text" name="q871" value="" size="256"/>*/}
              {/*        </label>*/}
              {/*        <label className={Styles.newForm__labelInput}>*/}
              {/*            <input placeholder={"Номер для связи*"} className={Styles.newForm__input} type="text" name="q24" value="" size="100"/>*/}
              {/*        </label>*/}
              {/*        <label >*/}
              {/*            <label className={Styles.newForm__label} style={{display:'flex'}}>*/}
              {/*                <div>*/}
              {/*                    <input className={Styles.newForm__checkBox} type="checkbox" name="q872" value="1"  />*/}
              {/*                </div>*/}
              {/*                Я выражаю своё согласие на обработку персональных данных, а также подтверждаю факт ознакомления с Политикой обработки персональных данных*/}
              {/*            </label>*/}
              {/*        </label>*/}
              {/*        <label>*/}
              {/*            <label className={Styles.newForm__label} style={{display:'flex'}}>*/}
              {/*                <div>*/}
              {/*                    <input className={Styles.newForm__checkBox} type="checkbox" name="q148" value="1"  />*/}
              {/*                </div>*/}
              {/*                Даю согласие на использование этой почты для связи со мной. Это простая и при этом важная формальность ? подтвердите своё согласие, чтобы мы могли вам писать.*/}
              {/*            </label>*/}
              {/*        </label>*/}
              {/*        <label>*/}
              {/*            <input className={Styles.newForm__inputNone} type="text" name="q672" value="Membrana.me" size="100"/>*/}
              {/*        </label>*/}
              {/*        <input className={Styles.newForm__button} type="submit" value="отправить"/>*/}
              {/*    </form>*/}
              {/*</div>*/}
              {/*<div className={Styles.FormSendsey} data-sendsay-form-embedded="x_1702990490671778/1"></div>*/}
      </div>
    </div>
  );
};

export default BlockContent;