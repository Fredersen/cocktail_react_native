import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useFonts} from "expo-font";
import Navbar from "./components/Navbar/Navbar";
import {FavoritesProvider} from "./contexts/FavoriteContext";
import {CartProvider} from "./contexts/CartContext";

const Stack = createNativeStackNavigator();

const navTheme = {
    colors: {
        background: "transparent"
    }
}

export default function App() {
    const [isFontLoaded] = useFonts({
        "Pacifico": require("./assets/fonts/Pacifico.ttf"),
        "AlataRegular": require("./assets/fonts/Alata-Regular.ttf")
    });

    return (
        <FavoritesProvider>
            <CartProvider>
                <NavigationContainer theme={navTheme}>
                    {isFontLoaded ? <Navbar />: null }
                </NavigationContainer>
            </CartProvider>
        </FavoritesProvider>
    );
}

