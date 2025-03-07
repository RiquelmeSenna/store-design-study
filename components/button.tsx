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
        backgroundColor: '#164e85',
        borderRadius: 12,
        paddingVertical: 15,
        paddingHorizontal: 25,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    areaText: {
        color: 'white',
        fontSize: 18
    }
})