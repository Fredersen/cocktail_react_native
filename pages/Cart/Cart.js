import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { s } from './Cart.style';
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import ImageBanner from "../../components/ImageBanner/ImageBanner";
import Subtitle from "../../components/SubTitle/Subtitle";
import { CartContext } from "../../contexts/CartContext";
import { Ionicons } from "@expo/vector-icons";

export default function Cart() {
    const { cartItems, removeFromCart } = useContext(CartContext);

    return (
        <Container>
            <Title title={"Mon Panier"} />
            <ImageBanner image={require('../../assets/cart.jpg')} />
            <Subtitle title={'Mes ingrédients'} />
            {cartItems.length === 0 ? (
                <View style={s.noItemsContainer}>
                    <Text style={s.noItemsText}>Vous n'avez pas d'ingrédients dans votre panier</Text>
                </View>
            ) : (
                <View style={s.ingredientsContainer}>
                    {cartItems.map((ingredient, index) => (
                        <View style={s.ingredientContainer} key={index}>
                            <View style={s.ingredientImgContainer}>
                                <Image style={s.ingredientImg} source={{ uri: ingredient.image }} />
                            </View>
                            <View style={s.ingredientTextContainer}>
                                <Text style={s.ingredientText}>{ingredient.ingredient}</Text>
                                <Text style={s.ingredientText}>{ingredient.measure}</Text>
                            </View>
                            <TouchableOpacity onPress={() => removeFromCart(ingredient)} style={s.removeIconContainer}>
                                <Ionicons name="remove-circle-outline" size={24} color="tomato" />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            )}
        </Container>
    );
}
