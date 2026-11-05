import { List } from "react-native-paper";

export default function TodoItem({
    id,
    text,
    completed,
}) {
    return (
        <List.Item
            title={text}
            right={() => <List.Icon icon={completed ? "check" : "checkbox-blank-outline"} />}
        />
    );
}