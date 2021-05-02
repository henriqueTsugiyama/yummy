import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserHistory } from "history";
import { Router, Route, BrowserRouter, Switch } from "react-router-dom";
import {Home} from "./pages/Home";
import {Products} from "./pages/Products";
import './App.css'
import './fonts/fonts.css'

const hist = createBrowserHistory();

function App(){
    
    return (
        <div className='main-container'>
            <BrowserRouter>
                <Router history={hist}>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/products" component={Products} />

                    </Switch>
                </Router>
            </BrowserRouter>
        </div>
        
    )
}


export default App;