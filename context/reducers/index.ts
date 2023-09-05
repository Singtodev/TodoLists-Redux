import { combineReducers } from "redux";
import TodoReducer , {todoStateProps} from "./TodoReducer";
import AuthReducer , {AuthStateProps} from "./AuthReducer";
import ProductOneReducer , {ProductOneStateProps} from "./Products/prod1_Reducer";

const rootReducer = combineReducers({
    todos: TodoReducer,
    user: AuthReducer,
    product: ProductOneReducer
})


export interface RootState {
    todos: todoStateProps;
    user: AuthStateProps
    product: ProductOneStateProps
}

export default rootReducer;