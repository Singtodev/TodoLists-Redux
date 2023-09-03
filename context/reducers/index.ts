import { combineReducers } from "redux";
import TodoReducer , {todoStateProps} from "./TodoReducer";

const rootReducer = combineReducers({
    todos: TodoReducer
})


export interface RootState {
    todos: todoStateProps;
}

export default rootReducer;