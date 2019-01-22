import React from 'react';

import classes from './Logo.module.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = ({height}) => (
    <div className={classes.Logo} style={{height: height}}>
        <img src={burgerLogo} alt="BurgerLogo" />
    </div>
);

export default logo;