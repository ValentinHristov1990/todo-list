import { useState } from 'react';
import { View } from 'react-native';
import { Modal, Text, TextInput, Button, } from 'react-native-paper';

export const CreateTodo = ({
    onDismiss
}) => {
    const [text, setText] = useState('');
    const containerStyle = { backgroundColor: 'white', padding: 20, margin: 20, };

    return (
        <Modal visible={true} onDismiss={onDismiss} contentContainerStyle={containerStyle} style={{ paddingBottom: 300 }}>
            <Text>Create a new todo.</Text>
            <View style={{ flexDirection: 'row', gap: 10, justifyContent: "space-between" }}>
                <TextInput
                    label="Name"
                    value={text}
                    style={{ flex: 1 }}
                    onChangeText={text => setText(text)}
                />

                <Button style={{ justifyContent: "center" }} icon="plus" mode="contained" onPress={() => console.log('Pressed')}>
                    Add
                </Button>
            </View>
        </Modal>
    );
};