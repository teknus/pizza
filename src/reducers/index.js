import { SET_PIZZA_SIZE, SET_PIZZA_CRUST, ADD_PIZZA_TOPPING, REMOVE_PIZZA_TOPPING} from "../constants/index";

const initialState = {
    size: "",
    crust: "",
    ingredients: [],
    toppings: [
        "Pepperoni",
        "Mushrooms",
        "Onions",
        "Sausage",
        "Bacon",
        "Extra Cheese",
        "Black Olives",
        "Green Peppers",
        "Pineapple",
        "Spinach",
    ],
};

function rootReducer(state = initialState, action) {
    switch (action.type){
    case SET_PIZZA_SIZE:
        return Object.assign({}, state, {
            size: action.payload
        });
    case SET_PIZZA_CRUST:
        return Object.assign({}, state, {
            size: action.payload
        });
    case ADD_PIZZA_TOPPING:
        return Object.assign({}, state, {
            ingredients: state.toppings.concat(action.payload)
        });
    case REMOVE_PIZZA_TOPPING:
        let list =  state.toppings.filter(el => el !== action.payload);
        return Object.assign({}, state, {
            ingredients: list
        });

    default:
        return state;
    }
}

export default rootReducer;
