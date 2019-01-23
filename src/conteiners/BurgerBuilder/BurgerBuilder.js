import React, {Component, Fragment} from 'react';

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 1,
    bacon: 1,
    cheese: 1,
    meat: 1
};

class BurgerBuilder extends Component {
    
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const ingredients = {
            ...this.state.ingredients
        }
        ingredients[type] = oldCount + 1;
        const totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({ ingredients, totalPrice })
        this.updatePurchaseState(ingredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const ingredients = {
            ...this.state.ingredients
        }
        if (oldCount <= 0) {
            return;
        }
        ingredients[type] = oldCount - 1;
        const totalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({ingredients: ingredients, totalPrice: totalPrice })
        this.updatePurchaseState(ingredients);
    }

    updatePurchaseState(newIngredients) {
        const sum = Object.keys(newIngredients)
            .map(key  => newIngredients[key])
            .reduce((sum, el) => sum + el, 0);
        this.setState({
            purchaseable: (sum > 0)
        });
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('Continue');
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Fragment>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}
                >
                    <OrderSummary
                        price={this.state.totalPrice}
                        ingredients={this.state.ingredients}

                        purchaseCanceled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    price={this.state.totalPrice}
                    disabled={disabledInfo}
                    purchaseable={this.state.purchaseable}
                    
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler} 
                    ordered={this.purchaseHandler}
                />
            </Fragment>
        );
    }
}

export default BurgerBuilder;