import { Stack } from 'expo-router';

export default function RegistrationLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // <-- hides the header for all screens in this folder
      }}
    >
      {/* Screens inside this folder */}
    </Stack>
  );
}