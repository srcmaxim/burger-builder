import React, {Component, Fragment} from 'react';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('Order summary: updates')
    }

    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(key => (
                <li key={key}>
                    <span className={{textTransform: 'capitalize'}}>{key}</span>: {this.props.ingredients[key]}
                </li>
            ));
        return (
            <Fragment>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>   
                <Button type="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button type="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Fragment>
        );
    }
}

export default OrderSummary;

