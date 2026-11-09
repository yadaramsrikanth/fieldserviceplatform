import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return <>
   <StatusBar style="light" />
   <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="(auth)" options={{ headerShown: false }} />

  </Stack> 
  </>
}
