import { useWindowSize } from '../../hooks/useWindowSize';
import * as yup from 'yup';
import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


import Styles from './FormBlock.module.scss';
import classNames from "classnames";
import React, {useEffect, useState} from "react";
import CheckBox from "../ui/CheckBox/CheckBox";
import Ticker from "../ui/Ticker/Ticker";
import axios from "axios";

const BlockContent = ({ formBlockRef }) => {
    const { windowWidth } = useWindowSize();
    const [isChecked, setIsChecked] = useState(false);
    const instance = axios.create({
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        withCredentials: true,
    });


    const cleanPhoneNumber = (value) => {
        const cleanedValue = value.replace(/[\s()-]/g, '');
        return cleanedValue;
    };

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

    const formSubmit = (data) => {
        return instance
            .post('https://sendsay.ru/backend/tilda/1QEeXj5ALOZM3KoBqYbsSLP1Kq1YM55pFB1i4sb4', {data})
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.error('Ошибка при отправке запроса formSubmits:', error);
                throw error;
            });
        // console.log(data)
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
      <div className={Styles.Block} ref={formBlockRef}>
        <div className={classNames(Styles.Title, Styles.Title_one)}>
          <h2>Ваши данные —<br/> это ваша собственность</h2>
        </div>
        <div className={classNames(Styles.Subtitle, Styles.Subtitle_one)}>
            {windowWidth <= 500 ? <p>Мы гарантируем, что они <br/> не используются для монетизации <br/> и не передаются третьим лицам</p> :
                <p>Мы гарантируем, что они не используются для монетизации и не передаются третьим лицам.</p>}
        </div>


        <div className={Styles.HeadBlock}>
          <div className={classNames(Styles.Title, Styles.Title_two)}>
              {windowWidth <= 500   ?<h2>
                  Вступайте в&nbsp;закрытый клуб Membrana
              </h2> : <h2>
                  Вступайте в&nbsp;закрытый <br/> клуб Membrana
              </h2>}
          </div>
          <div className={classNames(Styles.Subtitle, Styles.Subtitle_twoz)}>

              {/*{windowWidth <= 500 ?  <p>Заполните форму — и мы с вами <br/> свяжемся. Покажем возможности <br/> для компаний и организуем  <br/>демо Membrana</p> : <p>Заполните форму — и мы с вами  свяжемся. Покажем возможности <br/> для компаний и организуем демо Membrana</p>}*/}
              <p>
                  Заполните форму&nbsp;&mdash; и&nbsp;мы&nbsp;с&nbsp;вами свяжемся.<br/>
                  Первая тысяча пользователей получит кастомную SIM-карту<br/>
                  Membrana в&nbsp;эксклюзивном конверте от&nbsp;нашей команды
              </p>
          </div>
        </div>

          <div className={Styles.FormWrapper}>
              {/*<form onSubmit={handleSubmit(formSubmit)}>*/}
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
      </div>
    </div>
  );
};

export default BlockContent;