import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { JsxComponent } from './components/JsxComponent.jsx';
import '../appfrontend/assets/App.css';
import img from './assets/img.png'

export default function App(){
    return(
        <Provider store={store}>
            <div className="App">
                <h1> This is APP</h1>
                <JsxComponent/>
                <img className="img" src={img} />
            </div>
        </Provider>
    );
}