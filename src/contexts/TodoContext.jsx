import { createContext } from "react";
import { useState } from "react";
import uuid from 'react-native-uuid'

export const TodoContext = createContext({
    showCreateTodo: false,
    handleDismiss: () => { },
    openCreateTodoHandler: () => { },
    addTodo: (text) => [],
    deleteTodo: (id) => { },
    toggleTodo: (id) => { },
    mode: 'view',
    /**
     * 
     * @param {"view"|"edit"|"delete"} mode 
     */
    switchMode: (mode = 'view') => { }
});

export function TodoProvider({ children }) {

    const [todos, setTodos] = useState([
        {
            id: uuid.v4(),
            text: 'First task',
            completed: false
        },
        {
            id: uuid.v4(),
            text: 'Second task',
            completed: false
        },
        {
            id: uuid.v4(),
            text: 'Third task',
            completed: false
        }
    ]);
    const [showCreateTodo, setShowCreateTodo] = useState(false);
    const [mode, setMode] = useState("view");

    const handleDismiss = () => {
        setShowCreateTodo(false);
    };

    const openCreateTodoHandler = () => {
        setShowCreateTodo(true);
    };

    const switchMode = (newMode = 'view') => {
        const validModes = ['view', 'edit', 'delete']

        if (!validModes.includes(newMode)) {
            return;
        }
        setMode(newMode === mode ? 'view' : newMode);
    }
    const addTodo = (text) => {
        const newTodo = {
            id: uuid.v4(),
            text,
            completed: false,
        }
        setTodos(prevTodos => [...prevTodos, newTodo])
    }

    const deleteTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }

    const toggleTodo = (id) => {
        setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const value = {
        showCreateTodo,
        handleDismiss,
        openCreateTodoHandler,
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        mode,
        switchMode
    }
    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );
}