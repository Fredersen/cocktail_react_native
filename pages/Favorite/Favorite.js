import {s} from "./Favorite.style";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import ImageBanner from "../../components/ImageBanner/ImageBanner";
import Subtitle from "../../components/SubTitle/Subtitle";
import {FavoritesContext} from "../../contexts/FavoriteContext";
import {useContext, useEffect, useState} from "react";
import {CocktailApi} from "../../api/cocktail";
import {ScrollView, Text, View} from "react-native";
import CocktailCard from "../../components/CocktailCard/CocktailCard";

export default function Favorite() {
    const { favorites } = useContext(FavoritesContext);
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        fetchFavoriteCocktails();
    }, [favorites]);

    function fetchFavoriteCocktails() {
        if (favorites.length === 0) {
            setCocktails([]);
            return;
        }

        const fetchCocktails = async () => {
            const newCocktails = [];

            for (const id of favorites) {
                try {
                    const data = await CocktailApi.getCocktailById(id);
                    if (data.drinks && data.drinks.length > 0) {
                        newCocktails.push(data.drinks[0]);
                    }
                } catch (e) {
                    console.log(e);
                }
            }

            setCocktails(newCocktails);
        };

        fetchCocktails();
    }

    return (
        <Container>
            <Title title={"Favoris"} />
            <ImageBanner image={require('../../assets/favoris.jpg')} />
            <Subtitle title={'Vos cocktails favoris'} />
            {cocktails.length > 0 ? (
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={s.cocktailContainer}
                >
                    {cocktails.map((cocktail, index) => (
                        <CocktailCard cocktail={cocktail} key={index} />
                    ))}
                </ScrollView>
            ) : (
                <View style={s.errorMessageContainer}>
                    <Text style={s.errorMessage}>Vous n'avez pas de cocktail dans vos favoris</Text>
                </View>
            )}
        </Container>
    );
}
