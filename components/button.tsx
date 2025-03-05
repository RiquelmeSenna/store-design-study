import { Pressable, StyleSheet, Text } from "react-native"

type Props = {
    name: string,
    handleClick: () => void
}

export const Button = ({ name, handleClick }: Props) => {
    return (
        <Pressable style={styles.area} onPress={handleClick}>
            <Text style={styles.areaText}>{name}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    area: {
        backgroundColor: '#4267B2',
        borderRadius: 12,
        width: 220,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    areaText: {
        color: 'white',
        fontSize: 18
    }
})