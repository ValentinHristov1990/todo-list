import { useContext } from "react";
import { List } from "react-native-paper";
import { TodoContext } from "../../contexts/TodoContext";
import TodoItem from "../todo-item/TodoItem";

export default function TodoList() {

    const { todos, toggleTodo, mode } = useContext(TodoContext);

    const onPressHandler = (id) => {
        switch (mode) {
            case 'view':
                toggleTodo(id);
                break;
            case 'edit':
                // toggleTodo(id);
                break;
            case 'delete':
                // toggleTodo(id);
                break;

            default:
                break;
        }
    }
    return (
        <List.Section>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    onPress={() => onPressHandler(todo.id)}
                    mode={mode}
                />
            ))}
        </List.Section>
    );
}