import { Slot, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Slot   
      screenOptions={{
      title: 'SpotOn',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
    }}
    />
  </GestureHandlerRootView>
  );
}
