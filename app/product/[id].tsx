import { useRouter, useLocalSearchParams } from "expo-router";
import { Image, Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { getProduct } from "../../services/products";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    const { id } = useLocalSearchParams()

    const product = getProduct(parseInt(id as string))

    const handleClick = () => {
        alert(`Você está comprando o produto ${product?.title}`)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.area}>
                <Image style={styles.img} source={{ uri: product?.image }} />
                <Text style={styles.title}>{product?.title}</Text>
                <Text style={styles.desc}>{product?.description}</Text>
                <View style={styles.areaPrice}>
                    <Text style={styles.price}>R$ {product?.price.toFixed(2)}</Text>
                </View>
            </View>
            <Pressable style={styles.button} onPress={handleClick}>
                <Text style={styles.buttonText}>Comprar Agora</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
        marginHorizontal: 10,
        flex: 1
    },
    area: {
        flex: 1
    },
    img: {
        width: '100%',
        height: 250,
        borderRadius: 10
    },
    title: {
        marginTop: 10,
        fontSize: 28,
        fontWeight: 'bold'
    },
    desc: {
        fontSize: 16,
        color: '#777'
    },
    areaPrice: {
        width: '100%',
        height: 50,
        backgroundColor: '#ccc',
        borderRadius: 10,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    price: {
        fontSize: 22,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#3b5998',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }

})