import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
    cocktailContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    errorMessageContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorMessage: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        color: 'red',
    },
});
