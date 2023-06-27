import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
    popularCocktail: {
        marginRight: 10,
        width: 150,
        height: 200,
    },
    popularCocktailImg: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 10,
    },
    titleContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
        borderRadius: 10,
    },
    popularCockailTitle: {
        textAlign: 'center',
        color: 'white',
        padding: 5,
        fontFamily: 'AlataRegular',
        fontSize: 16,
    },
    heartIconContainer: {
        position: 'absolute',
        zIndex: 1000,
        top: 10,
        right: 10,
        borderRadius: 12,
        padding: 4,
    },
    heartIcon: {
        position: 'absolute',
        right: 0,
    },
});