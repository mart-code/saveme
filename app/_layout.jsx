import {AuthProvider} from "../context/AuthContext";
import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
 
  return (
    <AuthProvider>
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          paddingVertical: 10,
          paddingHorizontal: 10,
        },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="signIn" options={{ title: "Sign In" }} />
      <Stack.Screen name="signUp" options={{ title: "Sign Up" }} />
    </Stack>
    </AuthProvider>

  );
}
