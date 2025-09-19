import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Enter Name",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="welcome"
        options={{
          title: "Welcome",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="notes"
        options={{
          title: "Notes",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="renderlistofobj"
        options={{
          title: "renderlistofobj",
          headerBackTitle: "Back",
        }}
      />
    </Stack>
  );
}
