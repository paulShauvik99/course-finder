import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import cardDataReducer from "./CardList/cardListReducer";
import logger from 'redux-logger'




const store = createStore(cardDataReducer,applyMiddleware(logger,thunk));

export default store;