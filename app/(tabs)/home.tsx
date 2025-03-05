import { FlatList, Text, View } from "react-native"
import { data } from "../../data/data"
import { ProductScreen } from "../../components/products"




export default function App() {
    const handleClick = () => {

    }
    return (
        <View>
            <FlatList
                data={data.products}
                renderItem={({ item }) => <ProductScreen props={item} handleClick={handleClick} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )

}