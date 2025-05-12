import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          paddingVertical: 10,
          paddingHorizontal: 10,
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Sign In" }} />
      <Stack.Screen name="homeScreen" options={{ title: "Home" }} />
      <Stack.Screen name="signUp" options={{ headerTitle: "Sign Up" }} />
      <Stack.Screen name="signIn" options={{ headerTitle: "Sign In" }} />
      <Stack.Screen
        name="forgotPassword"
        options={{ headerTitle: "Forgot Password" }}
      />
      <Stack.Screen
        name="newPassword"
        options={{ headerTitle: "Set New Password" }}
      />
      <Stack.Screen
        name="confirmEmail"
        options={{ headerTitle: "Confirm Email" }}
      />
    </Stack>
  );
}
