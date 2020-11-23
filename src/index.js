import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from 'react-redux';
import {rootReducer} from "./redux/rootReducer";

import createSagaMiddleware from 'redux-saga';

import {Routing} from "./routing";
import {Navbar} from "./core/Navbar";
import './index.css';
import {watchRegister, watchLogin} from "./saga/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

sagaMiddleware.run(watchRegister);
sagaMiddleware.run(watchLogin);


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <div className='container'>
                    <Routing />
                </div>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


