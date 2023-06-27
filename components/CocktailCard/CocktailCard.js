import { s } from './CocktailCard.style';
import { Image, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { FavoritesContext } from "../../contexts/FavoriteContext";

export default function CocktailCard({ cocktail }) {
    const navigation = useNavigation();
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

    function goToCocktail() {
        navigation.navigate('Cocktail', { cocktail });
    }

    function handleFavorites() {
        if (favorites.includes(cocktail.idDrink)) {
            removeFavorite(cocktail.idDrink);
        } else {
            addFavorite(cocktail.idDrink);
        }
    }

    return (
        <TouchableOpacity style={s.popularCocktail} onPress={goToCocktail}>
            <Image style={s.popularCocktailImg} source={{ uri: cocktail.strDrinkThumb }} />
            <View style={s.heartIconContainer}>
                <TouchableOpacity onPress={handleFavorites}>
                    <Ionicons
                        name={favorites.includes(cocktail.idDrink) ? 'heart' : 'heart-outline'}
                        size={24}
                        color={favorites.includes(cocktail.idDrink) ? 'tomato' : 'white'}
                        style={s.heartIcon}
                    />
                </TouchableOpacity>
            </View>
            <View style={s.titleContainer}>
                <Text style={s.popularCockailTitle}>{cocktail.strDrink}</Text>
            </View>
        </TouchableOpacity>
    );
}
