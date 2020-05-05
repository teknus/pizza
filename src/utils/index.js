import pepperoni from "../icons/png/009-pepperoni.png";
import mushrooms from "../icons/png/008-mushroom.png";
import onions  from "../icons/png/007-onion.png";
import sausage from "../icons/png/006-sausage.png";
import bacon from "../icons/png/005-bacon.png";
import cheese from "../icons/png/004-cheese.png";
import olives from "../icons/png/003-olive.png";
import greenpeppers from "../icons/png/010-pepper.png";
import pineapple from "../icons/png/002-pineapple.png";
import spinach from "../icons/png/001-spinach.png";

import thin from "../icons/png/thin.png";
import thick from "../icons/png/thick.png";

import large from '../icons/svg/001-pizza-1.svg';
import medium from '../icons/svg/002-pizza.svg';
import small from '../icons/svg/003-pizza-2.svg';


export function imageIcon(topping){
    switch(topping){
    case "Pepperoni":
        return {icon: pepperoni, alt:"Peperoni icon"};
    case "Mushrooms":
        return {icon: mushrooms, alt:"Mushrooms icon"};
    case "Onions":
        return {icon: onions, alt:"Onions icon"};
    case "Sausage":
        return {icon: sausage, alt: "Sausage icon"};
    case "Bacon":
        return {icon: bacon, alt:"Bacon icon"};
    case "Extra Cheese":
        return {icon: cheese, alt:"Extra icon" };
    case "Black Olives": 
        return {icon: olives, alt:"Black olives icon"};
    case "Green Peppers":
        return {icon: greenpeppers, alt:"Green peppers icon"};
    case "Pineapple":
        return {icon: pineapple, alt: "Pineapple icon"};
    default:
        return {icon: spinach, alt: "Spinach icon"};
    }
}


export function imageSize(size){
    switch (size){
    case "small":
        return {size: small, alt: "small pizza icon"};
    case "medium":
        return {size: medium, alt: "medium pizza icon"};
    default:
        return {size: large, alt: "large pizza icon"};
    }
}

export function imageCrust(crust){
    switch (crust){
    case "thin":
        return {thickness: thin, alt: "thin icon"};
    default:
        return {thickness: thick, alt: "thick icon"};
    }

}

