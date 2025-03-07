import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="product/[id]" options={{ headerShown: true, title: '' }} />
        </Stack>
    )
}