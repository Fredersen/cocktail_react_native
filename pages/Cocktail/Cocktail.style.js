import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 200,
    },
    cocktailImage: {
        width: '50%',
        height: '100%',
    },
    mirror: {
        transform: [{scaleX: -1}],
    },
    descriptionContainer: {
        padding: 20,
    },
    descriptionText: {
        fontSize: 14,
        color: 'black',
        lineHeight: 24,
    },
    ingredientContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    ingredientImgContainer: {
        flex: 1,
        alignItems: 'center',
    },
    ingredientImg: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    ingredientTextContainer: {
        flex: 2,
    },
    ingredientText: {
        fontSize: 16,
    },
    cartContainer: {
        flex: 1,
    }
});
