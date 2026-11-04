import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { TopBar } from "./components/top-bar/TopBar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BottomBar } from "./components/bottom-bar/BottomBar";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <View style={{ flex: 1 }}>
        <TopBar />
        <BottomBar />
      </View>
    </SafeAreaProvider>
  );
}
