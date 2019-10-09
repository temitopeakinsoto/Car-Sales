import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {storeReducer} from './state/reducers'
import {Provider} from "react-redux";

import 'bulma/css/bulma.css';
import './styles.scss';

export const store = createStore(
    storeReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App /> 
</Provider>, rootElement);
