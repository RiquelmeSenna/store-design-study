import { FlatList, Text, View } from "react-native";
import { data } from "../../data/data";
import { CategoryScreen } from "../../components/categories";

export default function App() {
    const handleClick = () => {

    }


    return (
        <View>
            <FlatList
                data={data.categories}
                renderItem={({ item }) => <CategoryScreen props={item} handleClick={handleClick} />}
            />
        </View>
    )
}