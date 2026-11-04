import * as React from 'react';
import { Appbar } from 'react-native-paper';

export const TopBar = () => (

    <Appbar.Header>
        <Appbar.BackAction onPress={() => { }} />
        <Appbar.Content title="TODO App" />
        <Appbar.Action icon="calendar" onPress={() => { }} />
        <Appbar.Action icon="magnify" onPress={() => { }} />
    </Appbar.Header>
);

