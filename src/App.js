import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import homepage from './pages/homepage';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
    <BrowserRouter>
        <Route exact path='/' component={homepage} />
    </BrowserRouter>
);

export default App;
