import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack screenOptions={{ headerTitleAlign: 'center' }}>
            <Stack.Screen name="categories" options={{ title: 'Categorias' }} />
            <Stack.Screen name="[id]" />
        </Stack>
    )
}