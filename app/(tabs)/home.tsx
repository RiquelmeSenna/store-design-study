import { FlatList, Text, View } from "react-native"
import { data } from "../../data/data"
import { ProductScreen } from "../../components/products"
import { useRouter } from "expo-router"
import { getAllProducts } from "../../services/products"

export default function App() {
    const navigate = useRouter()

    const products = getAllProducts()

    const handleClick = (id: number) => {
        navigate.navigate(`/product/${id}`)
    }
    return (
        <View>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductScreen props={item} handleClick={() => handleClick(item.id)} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}