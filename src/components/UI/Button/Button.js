import React from 'react';

import classes from './Button.module.css';

const BUTTON_TYPES = {
    'Success': classes.Success,
    'Danger': classes.Danger
};

const button = ({children, clicked, type}) => {
    return (
        <button
            onClick={clicked}
            className={[classes.Button, BUTTON_TYPES[type]].join(' ')}
        >{children}</button>
    );
};

export default button;