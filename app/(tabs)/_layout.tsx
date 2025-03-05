import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function Layout() {
    return (
        <Tabs screenOptions={{ headerTitleAlign: 'center' }}>
            <Tabs.Screen name="home" options={{ title: 'Inicio', tabBarIcon: ({ color }) => <FontAwesome color={color} size={26} name="home" /> }} />
        </Tabs>
    )
}