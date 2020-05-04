import { ADD_PIZZA_TOPPING, REMOVE_PIZZA_TOPPING, UPDATE_PIZZA_TOPPING} from "../constants/index";

export function updateIngredientsMiddleware({ getState, dispatch }) {
    return function(next) {
        return function(action) {
            console.log(action);
            let state = getState();
            let topping = action.payload;
            if(action.type === UPDATE_PIZZA_TOPPING) {
                if( state.ingredients.includes(topping) ){
                    dispatch({type: REMOVE_PIZZA_TOPPING, payload: topping});
                } else {
                    dispatch({type: ADD_PIZZA_TOPPING, payload: topping});
                }
            }
            return next(action);
        };
    };
}
