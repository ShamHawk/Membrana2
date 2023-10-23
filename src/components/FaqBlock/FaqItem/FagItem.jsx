import React, {useState} from 'react';
import Styles from "../FagBlock.module.scss";
import plus from '../../../assets/img/plus.svg'
const FagItem = ({title, content, onItemClick, isActive}) => {
    return (
            <div className={Styles.FaqBlock}  >
            <div className={Styles.FaqTitle} onClick={onItemClick} >
                <p className={Styles.FaqText}>
                    {title}
                </p>
                <div className={Styles.IconBg} >
                    <img
                        // className={Styles.PlusIcon}
                        src={plus} alt={'plus'}
                        style={{rotate: isActive ? '45deg' : '0deg', transition: 'rotate .3s'}}
                    />
                </div>
            </div>

                    <div className={Styles.Content} style={{
                        maxHeight: isActive ? '500px' : "0px",
                        marginBottom: isActive ? '24px' : "0px",
                        opacity: isActive ? '1' : '0',
                        transition: "max-height .3s, opacity .3s, margin .3s",
                    }}>
                    {content}
                    </div>

            </div>
    );
};

export default FagItem;