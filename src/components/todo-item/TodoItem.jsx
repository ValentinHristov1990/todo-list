import { List } from "react-native-paper";

export default function TodoItem({
    id,
    text,
    completed,
    onPress,
}) {
    return (
        <List.Item
            onPress={onPress}
            title={text}
            right={() => <List.Icon icon={completed ? "check" : "checkbox-blank-outline"} />}
        />
    );
}