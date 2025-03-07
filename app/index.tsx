import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/button";
import { useRouter } from "expo-router";

export default function App() {
    const navigate = useRouter()


    const handleClick = () => {
        navigate.replace('/home')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.img} source={require('../assets/logo.png')} />
            <Text style={styles.title}>Loja do fulano</Text>
            <Text style={styles.desc}>Aqui você encontra tudo o que quiser!</Text>
            <Button name="Começar as compras" handleClick={handleClick} />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    img: {
        height: 250,
        width: 250,
        marginBottom: 15
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        marginBottom: 10
    },

    desc: {
        fontSize: 17,
        marginBottom: 20
    }
})