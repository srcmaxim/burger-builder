import React from 'react';

import Aux from '../../hoc/Auxiliary'

import styles from './Layout.module.css';

const layout = ({ children }) => (
    <Aux>
        <div>Toolbar, SiedDrawer, Backdrop</div>
        <main className={styles.Content}>
            {children}
        </main>
    </Aux>
);

export default layout;