import React from 'react';

import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button';

const orderSummary = ({
            price,
            ingredients,
            purchaseCanceled,
            purchaseContinued
        }) => {
    const ingredientsSummary = Object.keys(ingredients)
        .map(key => (
            <li key={key}>
                <span className={{textTransform: 'capitalize'}}>{key}</span>: {ingredients[key]}
            </li>
        ));
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>   
            <Button type="Danger" clicked={purchaseCanceled}>CANCEL</Button>
            <Button type="Success" clicked={purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;

