

export interface todoStateProps{ 
    todos: any[]
}

const initialState: todoStateProps = {
    todos: []
};


const TodoReducer = (state = initialState , action: any) => {
    switch(action.type){
        case "ADD_TO_LIST":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length + 1,
                        item: action.payload.item
                    }
                ]
            };

        case "REMOVE_FROM_LIST":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id),
            }
        default:
            return  state;
    }

    
}

export default TodoReducer;