import { ADD_TODO, DELETE_TODO } from "./actions";
import { todos } from "./states";

export let reducer = (state = todos, action) => {
    let newTodos;
    switch(action.type) {
        
        case ADD_TODO:
            newTodos = [...state];
            newTodos.push(action.payload);
            return newTodos;

        case DELETE_TODO:
            newTodos = [...state];
            const index = newTodos.findIndex(val => val.id === action.payload)
            if(index !== -1) {
                newTodos[index].completed = !newTodos[index].completed;
                return newTodos;
            }
            else {
                return newTodos;
            }
            default:
                return state;
    }
}