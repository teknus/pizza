import React from 'react';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";

import PizzaSize from './pages/PizzaSize';
import PizzaCrust from './pages/PizzaCrust';
import PizzaIngredients from './pages/PizzaIngredients';
import Checkout from "./pages/Checkout";

const Routes = ({store}) => {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
                <Route strict path="/crust" component={PizzaCrust}/>
                <Route strict path="/ingredients" component={PizzaIngredients}/>
                <Route strict path="/checkout" component={Checkout}/>
                <Route strict path="/"  component={PizzaSize} />
            </Switch>
          </BrowserRouter>
         </Provider>
    );
}

export default Routes;
