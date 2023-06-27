import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'black',
        marginHorizontal: 20,
    },
    title: {
        textAlign: 'center',
        color: 'black',
        fontFamily: 'AlataRegular',
        fontSize: 18,
        lineHeight: 22,
    },
});
