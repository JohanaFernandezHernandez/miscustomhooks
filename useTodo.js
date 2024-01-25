import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const inicialState = [];

const inicial = () => {
return JSON.parse( localStorage.getItem('todos') || []);
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, inicialState, inicial)

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleNewTodo = (todo) => {
      const action = {
        type: 'Add TODO',
        payload: todo
      }
      dispatch(action)
    }

    const handleDeleteTodo = (id)  => {
      dispatch({
        type: 'Remove TODO',
        payload: id

      })
    }

    const handleToggleTodo = (id) => {
      dispatch({
        type: 'Change TODO',
        payload: id

      })
    }


    return {
        handleToggleTodo,
        handleDeleteTodo,
        handleNewTodo,
        pendientesTodosCount: todos.filter(todo => !todo.done).length,
        todosCount: todos.length,
        todos,

    }
}
