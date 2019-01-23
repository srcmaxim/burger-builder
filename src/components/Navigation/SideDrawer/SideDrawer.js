import React, {Fragment} from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import classes from './SideDrawer.module.css';

const sideDrawer = ({open, closed}) => {
    const attachedClasses = [
        classes.SideDrawer,
        open ? classes.Open : classes.Close
    ].join(' ');

    return (
        <Fragment>
            <Backdrop show={open} clicked={closed}/>
            <div className={attachedClasses}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    );
};

export default sideDrawer;