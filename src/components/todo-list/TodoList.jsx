import { useContext } from "react";
import { List } from "react-native-paper";
import { TodoContext } from "../../contexts/TodoContext";
import TodoItem from "../todo-item/TodoItem";

export default function TodoList() {

    const { todos, toggleTodo, mode, deleteTodo, editTodo } = useContext(TodoContext);

    const onPressHandler = (id) => {
        switch (mode) {
            case 'view':
                toggleTodo(id);
                break;
            case 'edit':
                editTodo(id);
                break;
            case 'delete':
                deleteTodo(id);
                break;

            default:
                break;
        }
    }

    const getTodoIconName = (todo, mode) => {
        switch (mode) {
            case 'view':
                return todo.completed ? 'check' : 'checkbox-blank-outline';
            case 'edit':
                return 'pencil';
            case 'delete':
                return 'delete'
            default:
                return 'check';
        }
    }
    return (
        <List.Section>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    onPress={() => onPressHandler(todo.id)}
                    iconName={getTodoIconName(todo, mode)}
                />
            ))}
        </List.Section>
    );
}