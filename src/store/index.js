import {createStore,combineReducers} from "redux";
import GasolinaReducer from'./reducer'

const reducers =combineReducers({
    GasolinaReducer,});
const store= createStore(reducers);

export default store