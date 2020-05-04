import React from 'react';
import  { BrowserRouter, Route } from 'react-router-dom';

import PizzaSize from './pages/PizzaSize';
import PizzaCrust from './pages/PizzaCrust';
import PizzaIngredients from './pages/PizzaCrust';

export default function Routes(){
    return (
          <BrowserRouter>
            <Route path="/" component={PizzaSize} />
            <Route path="/crust" component={PizzaCrust}/>
            <Route path="/ingredients" component={PizzaIngredients}/>
           </BrowserRouter>
    );
}
