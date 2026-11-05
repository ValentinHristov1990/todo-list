import { List } from "react-native-paper";

export default function TodoItem({
    id,
    text,
    completed,
    onPress,
    mode,
}) {

    return (
        <List.Item
            onPress={onPress}
            title={text}
            right={() => mode === 'view'
                ? <List.Icon icon={completed ? "check" : "checkbox-blank-outline"} />
                : mode === 'edit'
                    ? <List.Icon icon='pencil' />
                    : mode === 'delete'
                        ? <List.Icon icon='delete' />
                        : null
            }
        />
    );
}