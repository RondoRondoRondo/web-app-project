import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
import './index.css';

/////// createStore replacement ///////
// import { configureStore } from '@reduxJS/toolkit';
// import todosReducer from '../features/todos/todosSlice';
// import filtersReducer from '../features/filters/filtersSlice';
/*  const store = configureStore({
        reducer: {
            todos: todosReducer,
            filters: filtersReducer
        }
    })
*/

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

