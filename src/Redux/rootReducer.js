import cardDataReducer from "./CardList/cardListReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    mainData : cardDataReducer
});

export default rootReducer