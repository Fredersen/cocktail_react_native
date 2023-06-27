import { s } from './Home.style';
import Container from "../../components/Container/Container";
import { View, Image, Text, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { CocktailApi } from "../../api/cocktail";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/SubTitle/Subtitle";
import CocktailCard from "../../components/CocktailCard/CocktailCard";
import ImageBanner from "../../components/ImageBanner/ImageBanner";

export default function HomeScreen() {
    const [popularCocktails, setPopularCocktails] = useState([]);
    const [latestCockatils, setLatestCocktails] = useState([]);

    useEffect(() => {
        fetchPopularCocktails();
        fetchLatestCockatils()
    }, []);

    async function fetchPopularCocktails() {
        try {
            const data = await CocktailApi.getPopularCocktails();
            setPopularCocktails(data.drinks.slice(0, 10));
        } catch (e) {
            console.log(e)
        }
    }

    async function fetchLatestCockatils() {
        try {
            const data = await CocktailApi.getLatestCocktails();
            setLatestCocktails(data.drinks.slice(0, 10));
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Container>
            <ScrollView>
                <Title title={'Cocktails'} />
                <ImageBanner image={require('../../assets/delicieux-cocktail-plage-tropicale-dans-verres-ventrus-fond-mer_124507-47661.jpg')} />
                <Subtitle title={'Cocktails du moment'} />
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={s.popularCocktailContainer}
                >
                    {popularCocktails.map((cocktail, index) => {
                            return (
                                <CocktailCard cocktail={cocktail} key={index} />
                            )
                        }
                    )}
                </ScrollView>
                <Subtitle title={'Les derniers ajouts'} />
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}r
                    style={s.popularCocktailContainer}
                >
                    {latestCockatils.map((cocktail, index) => {
                            return (
                                <CocktailCard cocktail={cocktail} key={index} />
                            )
                        }
                    )}
                </ScrollView>
            </ScrollView>
        </Container>
    );
}
