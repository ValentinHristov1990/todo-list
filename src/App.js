import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { TopBar } from "./components/top-bar/TopBar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BottomBar } from "./components/bottom-bar/BottomBar";
import { CreateTodo } from "./components/create-todo/CreateTodo";
import { useState } from "react";

export default function App() {
  const [showCreateTodo, setShowCreateTodo] = useState(true);

  const handleDismiss = () => {
    setShowCreateTodo(false);
  };

  const openCreateTodoHandler = () => {
    setShowCreateTodo(true);
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <View style={{ flex: 1 }}>
        <TopBar />
        <BottomBar openCreateTodoHandler={openCreateTodoHandler} />
        {showCreateTodo && <CreateTodo onDismiss={handleDismiss} />}
      </View>
    </SafeAreaProvider>
  );
}
