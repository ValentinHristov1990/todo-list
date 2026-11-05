import { useContext } from "react";
import { List } from "react-native-paper";
import { TodoContext } from "../../contexts/TodoContext";

export default function TodoList() {

    const { todos } = useContext(TodoContext);
    return (
        <List.Section>
            {todos.map((todo) => (
                <List.Item key={todo.id} title={todo.text} icon={todo.completed ? "check" : "checkbox-blank-outline"} />
            ))}
        </List.Section>
    );
}