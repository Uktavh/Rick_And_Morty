import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose; // esta linea es para conectar con la extension del navegador redux devtools

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))) // esta linea es para poder hacer peticiones a un server

export default store;