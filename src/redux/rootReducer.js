import { combineReducers } from "redux";
import SubscribersReducer from "./subscribers/reducer";
import viewsReducer from "./views/reducer";

const rootReducer = combineReducers({
    views: viewsReducer,
    Subscribers: SubscribersReducer,
});

export default rootReducer;