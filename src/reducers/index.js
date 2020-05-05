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
    totalPrice: 0,
    prices:{
        size:{
            "small":8,
            "medium":10,
            "large":12
        },
        crust:{
            "thin": 2,
            "thick": 4,
        },
        topping:0.50
    }
};

function calculatePrice(state){
    let size = state.size !== "" ? state.prices.size[state.size] : 0;
    let crust = state.crust !== "" ? state.prices.crust[state.crust]: 0;
    let value = (state.ingredients.length - 3) * state.prices.topping;
    let ingredients =  value > 0 ? value : 0 ;
    let currentPrice = size + crust + ingredients;
    return currentPrice;
}

function rootReducer(state = initialState, action) {
    switch (action.type){
    case SET_PIZZA_SIZE:
        state = Object.assign({}, state, {
            size: action.payload.size,
            maxToppings: state.sizeMaxToppings[action.payload.size],
        });
        return Object.assign({}, state, {
            totalPrice: calculatePrice(state)
        });

    case SET_PIZZA_CRUST:
        state = Object.assign({}, state, {
            crust: action.payload.crust
        });
        return Object.assign({}, state, {
            totalPrice: calculatePrice(state)
        });

    case ADD_PIZZA_TOPPING:
        state = Object.assign({}, state, {
            ingredients: state.ingredients.concat(action.payload)
        });
        return Object.assign({}, state, {
            totalPrice: calculatePrice(state)
        });

    case REMOVE_PIZZA_TOPPING:
        let list =  state.ingredients.filter(el => el !== action.payload);
        state = Object.assign({}, state, {
            ingredients: list,
        });
        return Object.assign({}, state, {
            totalPrice: calculatePrice(state)
        });
    default:
        return state;
    }
}

export default rootReducer;
