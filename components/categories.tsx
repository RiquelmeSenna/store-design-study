import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { Category } from "../types/category"

type Props = {
    props: Category,
    handleClick: () => void
}

export const CategoryScreen = ({ props, handleClick }: Props) => {
    return (
        <ScrollView>
            <Pressable style={styles.container} onPress={handleClick}>
                <Image style={styles.img} source={{ uri: props.cover }} />
                <View style={styles.area}></View>
                <Text style={styles.text}>{props.title}</Text>
            </Pressable>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: '100%',
        height: 150,
        borderRadius: 10
    },
    area: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        backgroundColor: 'black',
        opacity: 0.6,
        marginTop: -150
    },

    text: {
        position: 'absolute',
        color: 'white',
        fontSize: 24,
    }
})