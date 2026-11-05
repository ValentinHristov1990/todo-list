import { createContext } from "react";
import { useState } from "react";
import uuid from 'react-native-uuid'

export const TodoContext = createContext({
    showCreateTodo: false,
    handleDismiss: () => { },
    openCreateTodoHandler: () => { },
    addTodo: (text) => [],
});

export function TodoProvider({ children }) {

    const [todos, setTodos] = useState([]);
    const [showCreateTodo, setShowCreateTodo] = useState(false);

    const handleDismiss = () => {
        setShowCreateTodo(false);
    };

    const openCreateTodoHandler = () => {
        setShowCreateTodo(true);
    };

    const addTodo = (text) => {
        const newTodo = {
            id: uuid.v4(),
            text,
            completed: false,
        }

        setTodos(prevTodos => [...prevTodos, newTodo])
    }

    const value = {
        showCreateTodo,
        handleDismiss,
        openCreateTodoHandler,
        todos,
        addTodo
    }
    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );
}