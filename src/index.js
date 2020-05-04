import React from 'react';
import './index.css';
import App from './App';
import { render } from "react-dom";

render(
    <App/>,
    // The target element might be either root or app,
    // depending on your development environment
    // document.getElementById("app")
    document.getElementById("root")
);
