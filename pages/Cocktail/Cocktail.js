import { s } from './Cocktail.style';
import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import Title from "../../components/Title/Title";
import { useRoute } from "@react-navigation/native";
import Container from "../../components/Container/Container";
import Subtitle from "../../components/SubTitle/Subtitle";
import {useContext, useEffect, useState} from "react";
import { CocktailApi } from "../../api/cocktail";
import {Ionicons} from "@expo/vector-icons";
import {CartContext} from "../../contexts/CartContext";

export default function Cocktail() {
    const route = useRoute();
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
    const [cocktail, setCocktail] = useState(route.params.cocktail);

    useEffect(() => {
        !cocktail.strInstructions && fetchCocktailById(cocktail.idDrink);
    }, []);

    async function fetchCocktailById(id) {
        try {
            const data = await CocktailApi.getCocktailById(id);
            setCocktail(data.drinks[0]);
        } catch (e) {
            console.log(e);
        }
    }

    const ingredients = [];

    for (let i = 1; i <= 15; i++) {
        if (cocktail[`strIngredient${i}`]) {
            ingredients.push({
                ingredient: cocktail[`strIngredient${i}`],
                measure: cocktail[`strMeasure${i}`],
                image:
                    "https://www.thecocktaildb.com/images/ingredients/" +
                    cocktail[`strIngredient${i}`] +
                    ".png",
            });
        }
    }

    function handleCart(ingredient) {
        if (cartItems.some((item) => item.ingredient === ingredient.ingredient)) {
            removeFromCart(ingredient);
        } else {
            addToCart(ingredient);
        }
    }

    return (
        <Container>
            <ScrollView>
                <Title title={cocktail.strDrink} cocktailId={cocktail.idDrink} />
                <View style={s.container}>
                    <Image style={s.cocktailImage} source={{ uri: cocktail.strDrinkThumb }} />
                    <Image
                        style={[s.cocktailImage, s.mirror]}
                        source={{ uri: cocktail.strDrinkThumb }}
                    />
                </View>
                <Subtitle title={"Description"} />
                <View style={s.descriptionContainer}>
                    <Text style={s.descriptionText}>{cocktail.strInstructions}</Text>
                </View>
                <Subtitle title={"Ingrédients"} />
                <View style={s.ingredientsContainer}>
                    {ingredients.map((ingredient, index) => {
                        return (
                            <View style={s.ingredientContainer} key={index}>
                                <View style={s.ingredientImgContainer}>
                                    <Image style={s.ingredientImg} source={{ uri: ingredient.image }} />
                                </View>
                                <View style={s.ingredientTextContainer}>
                                    <Text style={s.ingredientText}>{ingredient.ingredient}</Text>
                                    <Text style={s.ingredientText}>{ingredient.measure}</Text>
                                </View>
                                <View style={s.cartContainer}>
                                    <TouchableOpacity onPress={() => handleCart(ingredient)}>
                                        <Ionicons name={cartItems.some((item) => item.ingredient === ingredient.ingredient) ? 'cart' : 'cart-outline'} size={24} color={cartItems.some((item) => item.ingredient === ingredient.ingredient) ? 'tomato' : 'black'} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </Container>
    );
}