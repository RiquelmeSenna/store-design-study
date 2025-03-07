import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function Layout() {
    return (
        <Tabs screenOptions={{ headerTitleAlign: 'center' }}>
            <Tabs.Screen name="home" options={{ title: 'Inicio', tabBarIcon: ({ color }) => <FontAwesome color={color} size={26} name="home" /> }} />
            <Tabs.Screen name="categories" options={{ headerShown: false, tabBarIcon: ({ color }) => <FontAwesome color={color} size={26} name="archive" /> }} />
            <Tabs.Screen name="about" options={{ title: 'Sobre Mim', tabBarIcon: ({ color }) => <FontAwesome color={color} size={26} name="user" /> }} />
        </Tabs>
    )
}