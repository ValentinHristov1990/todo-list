import { useContext, useState } from 'react';
import { View } from 'react-native';
import { Modal, Text, TextInput, Button, } from 'react-native-paper';
import { TodoContext } from '../../contexts/TodoContext';

export const CreateTodo = () => {
    const [text, setText] = useState('');
    const containerStyle = { backgroundColor: 'white', padding: 20, margin: 20, };
    const { addTodo, handleDismiss, showCreateTodo } = useContext(TodoContext);

    const addTodoHandler = () => {
        addTodo(text);
        setText('');
        handleDismiss();
    }
    return (
        <Modal visible={showCreateTodo} onDismiss={handleDismiss} contentContainerStyle={containerStyle} style={{ paddingBottom: 300 }}>
            <Text>Create a new todo.</Text>
            <View style={{ flexDirection: 'row', gap: 10, justifyContent: "space-between" }}>
                <TextInput
                    label="Name"
                    value={text}
                    style={{ flex: 1 }}
                    onChangeText={text => setText(text)}
                />

                <Button style={{ justifyContent: "center" }} icon="plus" mode="contained" onPress={addTodoHandler}>
                    Add
                </Button>
            </View>
        </Modal>
    );
};