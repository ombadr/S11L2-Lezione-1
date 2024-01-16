// Dichiarazione del reducer, ovvero della funzione PURA (da n input si ottengono sempre n output) il cui compito è generare un NUOVO stato ogni volta che un'azione viene emessa (dispatchata) da un component

// È importante dividere il redux store in compartimenti (attraverso il reducer) in modo da teneralo ordinato e potenzialmente avere una struttura capace di essere facilmente modificata in futuro (scalabile)

const initialState = {
	cart: {
		content: [], // l'array effettivo che rappresenta il carrello
	},
};

const mainReducer = (
	state = initialState, // lostato attuale, con valore di default inizialmente vuoto e poi, man mano che i component vi accedono, col valore modificato
	action
) => {
	// descrizione della logica di funzionamento del reducer, cioè COME il reducer calcolerà lo stato dell'app
	switch (action.type) {
		case 'ADD_TO_CART':
			// in ogni case va ritornato il NUOVO stato dell'app, che è sempre un oggetto (come se fosse scritto state.cart.content.push)
			return {
				...state, // comunicazione dell'INTERO stato attuale (old state)
				cart: {
					...state.cart, // tutte le proprietà non modificate dello state restano nel nuovo state
					content: [...state.cart.content, action.payload],
					// content: state.cart.content.concat(action.payload)
					// l'azione sarà action.payload + 1
				},
			};

		case 'REMOVE_FROM_CART':
			return {
				...state,
				cart: {
					...state.cart,
					content: state.cart.content.filter(
						(book, i) => i !== action.payload
					),
					// eliminerà dal carrello il libro che occupa la posizione che arriverà dalla action
					// book non è usato perché serve solo per leggere l'indica dell'array
					// action.payload passerà la posizione del libro da eliminare dal carrello, cioè da content

					// content: [
					//  ...state.cart.content.slice(0, action.payload),
					//  ...state.cart.content.slice (
					//  action.payload - 1
					//)
					// ]
				},
			};

		default:
			return state;
	}
};

export default mainReducer;
