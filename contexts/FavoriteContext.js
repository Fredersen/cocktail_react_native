import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        getFavoritesFromStorage();
    }, []);

    const getFavoritesFromStorage = async () => {
        try {
            const favoritesData = await AsyncStorage.getItem('favorites');
            if (favoritesData) {
                setFavorites(JSON.parse(favoritesData));
            }
        } catch (error) {
            console.log('Erreur lors de la récupération des favoris depuis Async Storage :', error);
        }
    };

    const addFavorite = async (favoriteId) => {
        try {
            const updatedFavorites = [...favorites, favoriteId];
            setFavorites(updatedFavorites);
            await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } catch (error) {
            console.log('Erreur lors de l\'ajout du favori :', error);
        }
    };

    const removeFavorite = async (favoriteId) => {
        try {
            const updatedFavorites = favorites.filter(id => id !== favoriteId);
            setFavorites(updatedFavorites);
            await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } catch (error) {
            console.log('Erreur lors de la suppression du favori :', error);
        }
    };

    const contextValue = {
        favorites,
        addFavorite,
        removeFavorite,
    };

    return (
        <FavoritesContext.Provider value={contextValue}>
            {children}
        </FavoritesContext.Provider>
    );
};

export { FavoritesContext, FavoritesProvider };
