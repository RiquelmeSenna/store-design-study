import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { Product } from "../types/product"

type Props = {
    props: Product,
    handleClick: () => void
}


export const ProductScreen = ({ props, handleClick }: Props) => {
    return (
        <Pressable style={styles.container} onPress={handleClick}>
            <Image style={styles.img} source={{ uri: props.image }} />
            <View style={styles.areaText}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.desc}>{props.description}</Text>
                <Text style={styles.price}>R$ {props.price.toFixed(2)}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    img: {
        width: 120,
        height: 120,
        margin: 15,
        borderRadius: 10
    },
    areaText: {
        flex: 1,
        marginRight: 15
    },
    title: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    desc: {
        fontSize: 14,
        maxWidth: 200,
        marginTop: 5
    },
    price: {
        marginTop: 10,
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 18
    }
})