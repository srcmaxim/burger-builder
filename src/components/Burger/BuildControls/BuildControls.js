import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = ({ price, ingredientAdded, ingredientRemoved, disabled }) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{price.toFixed(2)}</strong></p>
        {controls.map(({label, type}) => ( 
            <BuildControl
                key={label}
                label={label}
                added={ () => ingredientAdded(type) }
                removed={ () => ingredientRemoved(type) }
                disabled={ disabled[type] }
            />
        ))}
    </div>
)

export default buildControls;