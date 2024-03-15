const { createStore, applyMiddleware } = require('redux');
const { createLogger } = require('redux-logger');

const increment = () => {
    return {
        type: 'INCREMENT'
    }
};

const decrement = () => {
    return {
        type: 'DECREMENT'
    }
};

function reducer(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const loggerMiddleware = createLogger();

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

store.subscribe(() => {
    console.log("Counter is", store.getState());
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
