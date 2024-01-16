// Nello store si dichiara la costruzione del Redux Store; lo store deve sapere che i reducer sono tre e gestirli in un unico stato
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import mainReducer from '../reducers'; // chiamando il file del reducer index.js, questo import punta alla cartella reducers, che per prima cosa va a cercare un file index

import cartReducer from '../reducers/cart';
import bookReducer from '../reducers/book';
import userReducer from '../reducers/user';

// Creare un reducer combinato, con i tre reducers creati

const bigReducer = combineReducers({
	user: userReducer,
	book: bookReducer,
	cart: cartReducer,
});

const store = configureStore({
	reducer: bigReducer // lo store non utilizza uno o l'altro dei reducers, ma li utilizza tutti, combinati tra loro
})

export default store;
