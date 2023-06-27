import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home/Home";
import Cocktail from "../pages/Cocktail/Cocktail";
import Favorite from "../pages/Favorite/Favorite";
import Cart from "../pages/Cart/Cart";

const Stack = createNativeStackNavigator();

function HomeScreen() {
    return (
        <Stack.Navigator screenOptions={{animation:"fade", headerShown: false}} initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cocktail" component={Cocktail} />
            <Stack.Screen name="Favorite" component={Favorite} />
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    )
}
export default HomeScreen