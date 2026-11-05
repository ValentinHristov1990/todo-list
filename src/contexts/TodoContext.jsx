import { createContext } from "react";
import { useState } from "react";
import uuid from 'react-native-uuid'

export const TodoContext = createContext({
    showCreateTodo: false,
    handleDismiss: () => { },
    openCreateTodoHandler: () => { },
    addTodo: (text) => [],
    deleteTodo: (id) => { },
    editTodo: (id) => { },
    toggleTodo: (id) => { },
    mode: 'view',
    /**
     * 
     * @param {"view"|"edit"|"delete"} mode 
     */
    switchMode: (mode = 'view') => { },
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
    const [selectedTodo, setSelectedTodo] = useState(null);

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

        if (selectedTodo) {
            setTodos(prevTodos =>
                prevTodos.map(todo =>
                    todo.id === selectedTodo.id ? { ...todo, text } : todo
                )
            );
            setSelectedTodo(null);
            return;
        };

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

    const editTodo = (id) => {
        setSelectedTodo(todos.find(todo => todo.id === id));
        setShowCreateTodo(true)
    }

    const toggleTodo = (id) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    const value = {
        showCreateTodo,
        handleDismiss,
        openCreateTodoHandler,
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        editTodo,
        mode,
        switchMode,
        selectedTodo: selectedTodo,
    }
    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );
}