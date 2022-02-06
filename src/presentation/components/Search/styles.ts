import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 42,
        paddingBottom: 12,
    },
    title: {
        fontSize: 16,
        fontFamily: FONTS.REGULAR,
        color: COLORS.COLOR_PRIMARY,
    },
    textInput: {
        width: '100%',
        maxWidth: 400,
        height: 31,
        borderWidth: 1,
        borderColor: COLORS.GRAY_400,
        borderRadius: 4,
        paddingHorizontal: '2%'
    },
})
