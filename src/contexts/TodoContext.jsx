import { createContext } from "react";
import { useState } from "react";

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
        setTodos(prevTodos => [...prevTodos, { text }])
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