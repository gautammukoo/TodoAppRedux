export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export function addTodo(todo) {
    return {
        type: "ADD_TODO",
        payload: todo
    }
}

// Setting key completed to false just to reuse the same array to retrive back list from completed
export function deleteTodo(todoId) {
    return {
        type: "DELETE_TODO",
        payload: todoId
    }
}