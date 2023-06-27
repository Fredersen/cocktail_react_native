import { s } from './Title.style';
import { Text, TouchableOpacity, View } from "react-native";
import { FavoritesContext } from "../../contexts/FavoriteContext";
import { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Title({ title, cocktailId = null }) {
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

    function handleFavorites() {
        if (favorites.includes(cocktailId)) {
            removeFavorite(cocktailId);
        } else {
            addFavorite(cocktailId);
        }
    }

    return (
        <View style={s.titleContainer}>
            <Text style={s.title}>{title}</Text>
            {cocktailId && (
                <View style={s.heartIconContainer}>
                    <TouchableOpacity onPress={handleFavorites}>
                        <Ionicons
                            name={favorites.includes(cocktailId) ? 'heart' : 'heart-outline'}
                            size={24}
                            color='tomato'
                            style={s.heartIcon}
                        />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}
