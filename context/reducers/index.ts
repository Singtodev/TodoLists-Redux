import { combineReducers } from "redux";
import TodoReducer , {todoStateProps} from "./TodoReducer";
import AuthReducer , {AuthStateProps} from "./AuthReducer";

const rootReducer = combineReducers({
    todos: TodoReducer,
    user: AuthReducer
})


export interface RootState {
    todos: todoStateProps;
    user: AuthStateProps
}

export default rootReducer;