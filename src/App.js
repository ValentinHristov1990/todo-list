import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { TopBar } from "./components/top-bar/TopBar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BottomBar } from "./components/bottom-bar/BottomBar";

import { TodoProvider } from "./contexts/TodoContext";
import { CreateTodo } from "./components/create-todo/CreateTodo";

export default function App() {
  return (
    <SafeAreaProvider>
      <TodoProvider>
        <StatusBar style="auto" />
        <View style={{ flex: 1 }}>
          <TopBar />
          <CreateTodo />
          <BottomBar />
        </View>
      </TodoProvider>
    </SafeAreaProvider>
  );
}
