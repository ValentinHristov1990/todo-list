import { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Modal, Text, TextInput, Button, } from 'react-native-paper';
import { TodoContext } from '../../contexts/TodoContext';
import { Keyboard } from 'react-native';

export const CreateTodo = () => {
    const [text, setText] = useState(selectedTodo ? selectedTodo.text : '');
    const containerStyle = { backgroundColor: 'white', padding: 20, margin: 20, };
    const { addTodo, handleDismiss, showCreateTodo, selectedTodo } = useContext(TodoContext);

    useEffect(() => {
        if (selectedTodo) {
            setText(selectedTodo.text);
        }
    }, [selectedTodo])

    const addTodoHandler = () => {
        addTodo(text);
        setText('');
        Keyboard.dismiss();
        handleDismiss();
    }
    return (
        <Modal visible={showCreateTodo} onDismiss={handleDismiss} contentContainerStyle={containerStyle} style={{ paddingBottom: 100 }}>
            <Text>Create a new todo.</Text>
            <View style={{ flexDirection: 'row', gap: 10, justifyContent: "space-between" }}>
                <TextInput
                    label="Name"
                    value={text}
                    style={{ flex: 1 }}
                    onChangeText={text => setText(text)}
                    onSubmitEditing={addTodoHandler}
                />

                <Button style={{ justifyContent: "center" }} icon="plus" mode="contained" onPress={addTodoHandler}>
                    Add
                </Button>
            </View>
        </Modal>
    );
};