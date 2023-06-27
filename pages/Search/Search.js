import { s } from './Search.style';
import { Text, View, TouchableOpacity } from "react-native";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import ImageBanner from "../../components/ImageBanner/ImageBanner";
import { useEffect, useRef, useState } from "react";
import { CocktailApi } from "../../api/cocktail";
import CocktailCard from "../../components/CocktailCard/CocktailCard";
import Subtitle from "../../components/SubTitle/Subtitle";
import { ScrollView, TextInput } from "react-native";

export default function Search() {
    const [cocktails, setCocktails] = useState([]);
    const [searchIngredient, setSearchIngredient] = useState([]);
    const textInputRef = useRef(null);

    useEffect(() => {
        fetchPopularCocktails();
    }, []);

    useEffect(() => {
        searchIngredient.length === 0 ? fetchPopularCocktails() : fetchCocktailsByIngrediants(searchIngredient);
    }, [searchIngredient]);


    async function fetchPopularCocktails() {
        try {
            const data = await CocktailApi.getPopularCocktails();
            data.drinks ? setCocktails(data.drinks.slice(0, 10)) : setCocktails([]);
        } catch (e) {
            console.log(e)
        }
    }

    async function fetchCocktailsByIngrediants(ingredients) {
        try {
            const data = await CocktailApi.getCocktailsByIngredients(ingredients);
            data.drinks !== "None Found" ? setCocktails(data.drinks.slice(0, 10)) : setCocktails([]);
        } catch (e) {
            console.log(e)
        }
    }

    function onSubmit(text) {
        const updatedIngredients = [...searchIngredient, text];
        setSearchIngredient(updatedIngredients);
        textInputRef.current.clear();
    }

    function removeIngredient(ingredient) {
        const newIngredients = searchIngredient.filter((item) => item !== ingredient);
        setSearchIngredient(newIngredients);
    }

    return (
        <Container>
            <Title title={'Recherche'} />
            <View>
                <ImageBanner image={require('../../assets/FY21_US_Bacardi_Hero-Cocktail_Marketing_Asset_Old-Cuban_PBX-tiff.jpg')} />
                <ScrollView
                    horizontal={true}
                    scenterhowsHorizontalScrollIndicator={false}
                    style={s.ingredientsContainer}
                >
                    {searchIngredient.map((ingredient, index) => {
                        return (
                            <View style={s.ingredientTextContainer} key={index}>
                                <Text style={s.ingredientText}>{ingredient}</Text>
                                <TouchableOpacity style={s.ingredientButton} onPress={() => removeIngredient(ingredient)}>
                                    <Text style={s.ingredientButtonText}>X</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
            <TextInput
                ref={textInputRef}
                onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
                style={s.input}
                placeholder="Recherchez les cocktails par ingrédient"
            />
            <Subtitle title={'Résultats de la recherche'} />
            {cocktails.length > 0 ? (
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={s.searchCockailsContainer}
                >
                    {cocktails.map((cocktail, index) => (
                        <CocktailCard cocktail={cocktail} key={index} />
                    ))}
                </ScrollView>
            ) : (
                <View style={s.errorMessageContainer}>
                    <Text style={s.errorMessage}>Aucun cocktail trouvé</Text>
                </View>
            )}
        </Container>
    );
}
