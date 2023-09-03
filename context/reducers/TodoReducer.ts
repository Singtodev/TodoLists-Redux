

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

        case "SAVE_STATE_LIST":
            localStorage.setItem('todos' , JSON.stringify(state.todos));
            console.log("save");
            return state;
        case "RETIVE_STATE_LIST":

            if(localStorage.getItem('todos') != null){
                try{
                    const items = JSON.parse(localStorage.getItem('todos')!);
                    console.log("get state");
                    return {
                        ...state,
                        todos: items
                    };
                }catch(err){
                    return {
                        ...state,
                        todos: []
                    }
                }

            }
            
            return state;



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