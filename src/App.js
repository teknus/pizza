import React from 'react';
import './App.css';
import Routes from './routes';
import store from "./store/index";

function App() {
    return (
        <Routes store={store}/>
    );
}

export default App;

