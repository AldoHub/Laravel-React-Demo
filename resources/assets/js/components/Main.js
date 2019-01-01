import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

//import Nav
import Nav from "./Nav";

//import the routes
import Routes from "./routes";



export default class Main extends Component {
    render() {
        return (
            <div className="container">
            
            <Nav />
            <header>
                 <div>   
                     <h1>LaravelReact</h1>
                     <p>Laravel and Reactjs Posts</p> 
                 </div>
              
                </header>
            <main>
                <Routes/>
            </main>
            <footer>
                <p>All rights reserved &copy; aldocaava</p>
            </footer>
            </div>
              
        );
    }
}

if (document.getElementById('App')) {
    ReactDOM.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>
    , document.getElementById('App'));
}

// in order to watch the changes you need to run "npm run watch"