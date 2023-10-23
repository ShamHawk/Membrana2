import React from 'react';
import Styles from "../FagBlock.module.scss";

const FagItem = ({title, content}) => {
    return (
            <div className={Styles.FaqBlock}>
                <p className={Styles.FaqText}>
                    {title}
                </p>
            </div>
    );
};

export default FagItem;