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
    sizes:[
        "small",
        "medium",
        "large"
    ],
    maxToppings: 0,
    crusts:[
        "thin",
        "thick"
    ],
    sizeMaxToppings: {
        "small": 5,
        "medium": 7,
        "large": 9,
    },
};

function rootReducer(state = initialState, action) {
    switch (action.type){
    case SET_PIZZA_SIZE:
        return Object.assign({}, state, {
            size: action.payload.size,
            maxToppings: state.sizeMaxToppings[action.payload.size],
        });
    case SET_PIZZA_CRUST:
        return Object.assign({}, state, {
            crust: action.payload.crust
        });
    case ADD_PIZZA_TOPPING:
        return Object.assign({}, state, {
            ingredients: state.ingredients.concat(action.payload)
        });
    case REMOVE_PIZZA_TOPPING:
        let list =  state.ingredients.filter(el => el !== action.payload);
        return Object.assign({}, state, {
            ingredients: list
        });

    default:
        return state;
    }
}

export default rootReducer;
