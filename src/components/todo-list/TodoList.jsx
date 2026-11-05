import { useContext } from "react";
import { List } from "react-native-paper";
import { TodoContext } from "../../contexts/TodoContext";
import TodoItem from "../todo-item/TodoItem";

export default function TodoList() {

    const { todos, toggleTodo } = useContext(TodoContext);
    return (
        <List.Section>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    onPress={() => toggleTodo(todo.id)}
                />
            ))}
        </List.Section>
    );
}