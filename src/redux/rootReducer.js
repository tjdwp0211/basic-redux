import { combineReducers } from "redux";
import SubscribersReducer from "./subscribers/reducer";
import viewsReducer from "./views/reducer";
import commentsReducer from "./comments/reducer";

const rootReducer = combineReducers({
    views: viewsReducer,
    Subscribers: SubscribersReducer,
    comments: commentsReducer,
});

export default rootReducer;