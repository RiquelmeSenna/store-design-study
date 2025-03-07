import { FlatList, Text, View } from "react-native";
import { data } from "../../../data/data";
import { CategoryScreen } from "../../../components/categories";
import { useRouter } from "expo-router";
import { getAllCategories } from "../../../services/category";

export default function App() {
    const navigate = useRouter()

    const categories = getAllCategories()

    const handleClick = (id: number) => {
        navigate.navigate(`categories/${id}`)
    }
    return (
        <View>
            <FlatList
                data={categories}
                renderItem={({ item }) => <CategoryScreen props={item} handleClick={() => handleClick(item.id)} />}
            />
        </View>
    )
}