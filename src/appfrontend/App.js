import React from 'react';
import { JsxComponent } from './components/JsxComponent.jsx';
import '../appfrontend/assets/App.css';
import img from './assets/img.png'

export default function App(){
    return(
        <div className="App">
            <h1> This is APP</h1>
            <JsxComponent/>
            <img className="img" src={img} />
        </div>
    );
}