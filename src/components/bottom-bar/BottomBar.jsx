import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TodoContext } from '../../contexts/TodoContext';

const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

export const BottomBar = () => {
    const { bottom } = useSafeAreaInsets();
    const theme = useTheme();
    const { openCreateTodoHandler, switchMode, mode } = useContext(TodoContext);


    return (
        <Appbar
            style={[
                styles.bottom,
                {
                    height: BOTTOM_APPBAR_HEIGHT + bottom,
                    backgroundColor: theme.colors.elevation.level2,
                },
            ]}
            safeAreaInsets={{ bottom }}
        >
            <Appbar.Action color={mode === 'view' ? 'green' : undefined} icon="format-list-bulleted" onPress={() => switchMode('view')} />
            <Appbar.Action color={mode === 'edit' ? 'blue' : undefined} icon="pencil" onPress={() => switchMode('edit')} />
            <Appbar.Action color={mode === 'delete' ? 'red' : undefined} icon="delete" onPress={() => switchMode('delete')} />
            <FAB
                mode="flat"
                size="medium"
                icon="plus"
                onPress={openCreateTodoHandler}
                style={[
                    styles.fab,
                    { top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2 },
                ]}
            />
        </Appbar>
    );
};

const styles = StyleSheet.create({
    bottom: {
        backgroundColor: 'aquamarine',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    fab: {
        position: 'absolute',
        right: 16,
    },
});
