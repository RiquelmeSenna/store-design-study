import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { getProductsFromCategory } from "../../../services/products";
import { ProductScreen } from "../../../components/products";
import { getCategoryById } from "../../../services/category";

export default function App() {
    const { id } = useLocalSearchParams()
    const navigate = useRouter()

    const products = getProductsFromCategory(parseInt(id as string))
    const category = getCategoryById(parseInt(id as string))

    const handleClick = (id: number) => {
        navigate.navigate(`/product/${id}`)
    }

    return (
        <View>
            <Stack.Screen options={{ title: category?.title }} />
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductScreen props={item} handleClick={() => handleClick(item.id)} />}
            />
        </View>
    )
}