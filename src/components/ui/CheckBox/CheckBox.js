import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import Styles from './CheckBox.module.scss';

const CheckBox = ({ type = 'checkbox', name = '', disabled = false, checked = false, ariaLabel = '' }) => {
    const [isChecked, setIsChecked] = useState(checked);

    useEffect(() => {
        setIsChecked(checked);
    }, [checked]);

    const handleChange = () => {
        if (!disabled) {
            setIsChecked((prev) => !prev);
        }
    };

    return (
        <div className={classNames(type === 'radio' ? Styles.Radio : Styles.CheckBox)}>
            <input
                className={disabled ? Styles.Disabled : null}
                type={type}
                name={name}
                checked={isChecked}
                onChange={handleChange}
                disabled={disabled}
                aria-label={ariaLabel}
            />

        </div>
    );
};

export default CheckBox;
