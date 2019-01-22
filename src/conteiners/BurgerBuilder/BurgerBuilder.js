import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

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
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const ingredients = {
            ...this.state.ingredients
        }
        ingredients[type] = oldCount + 1;
        const totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({ ingredients, totalPrice })
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
        this.setState({ ingredients: ingredients, totalPrice: totalPrice })
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    price={this.state.totalPrice}
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler} 
                    disabled={disabledInfo}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;