const redux = require('redux')
const reduxLogger = require('redux-logger');
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()
const Buy_cake= "Buy_cake"
const Buy_burgers ="Buy_burgers"
function buyCake(){
    return{
    type:Buy_cake
    }
}
function buyBurger(){
    return{
        type:Buy_burgers
    }
}

const initialCakeState={
    number_of_cakes:20
}
const initialBurgerState={
    number_of_burgers:30
}

const cakeReducer=(state=initialCakeState,action)=>{
    switch (action.type) {
        case Buy_cake:
            return {
                ...state,
                number_of_cakes: state.number_of_cakes - 1
            };
        default:
            return state;
    }
};

const burgerReducer=(state=initialBurgerState,action)=>{
    switch (action.type) {
        case Buy_burgers:
            return {
                ...state,
                number_of_burgers: state.number_of_burgers - 1
            };
        default:
            return state;
    }
};
const rootReducer =combineReducers({

    cake:cakeReducer,
    burger:burgerReducer
})
const store = createStore(rootReducer,applyMiddleware(logger))
console.log("Initial state",store.getState());
const unsubscribe =store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyBurger())
store.dispatch(buyBurger())
store.dispatch(buyBurger())
unsubscribe()