import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        getCartItemsFromStorage();
    }, []);

    const getCartItemsFromStorage = async () => {
        try {
            const cartItemsData = await AsyncStorage.getItem('cartItems');
            if (cartItemsData) {
                setCartItems(JSON.parse(cartItemsData));
            }
        } catch (error) {
            console.log('Erreur lors de la récupération des articles du panier depuis AsyncStorage :', error);
        }
    };

    const addToCart = async (ingredient) => {
        try {
            const updatedCartItems = [...cartItems, ingredient];
            setCartItems(updatedCartItems);
            await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        } catch (error) {
            console.log('Erreur lors de l\'ajout de l\'article au panier :', error);
        }
    };

    const removeFromCart = async (ingredient) => {
        try {
            const updatedCartItems = cartItems.filter((item) => item.ingredient !== ingredient.ingredient);
            setCartItems(updatedCartItems);
            await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        } catch (error) {
            console.log('Erreur lors de la suppression de l\'article du panier :', error);
        }
    };

    const clearCart = async () => {
        try {
            setCartItems([]);
            await AsyncStorage.removeItem('cartItems');
        } catch (error) {
            console.log('Erreur lors de la suppression du panier :', error);
        }
    };

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
