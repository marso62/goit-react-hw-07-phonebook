import { combineReducers } from "redux";
import { contactsReducer } from "./contacts";
import filterReducer from "./filter";
import loader from "./loader";
import error from "./error";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loader,
  error,
});

export default rootReducer;
