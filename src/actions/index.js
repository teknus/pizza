import { SET_PIZZA_SIZE, SET_PIZZA_CRUST, ADD_PIZZA_TOPPING, REMOVE_PIZZA_TOPPING, UPDATE_PIZZA_TOPPING } from "../constants/index";

export function setPizzaSize(payload) {
    return { type: SET_PIZZA_SIZE, payload };
}

export function setPizzaCrust (payload) {
    return { type: SET_PIZZA_CRUST, payload };
}

export function updatePizzaToppings (payload) {
    return { type: UPDATE_PIZZA_TOPPING , payload};
}

export function addPizzaToppings (payload) {
    return { type: ADD_PIZZA_TOPPING , payload};
}

export function removePizzaToppings (payload) {
    return { type: REMOVE_PIZZA_TOPPING , payload};
}

