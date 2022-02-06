import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 42
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: COLORS.COLOR_PRIMARY,
        fontSize: 16,
        fontFamily: FONTS.BLACK,
        lineHeight: 19,
    },
    subtitle: {
        color: COLORS.COLOR_PRIMARY,
        fontSize: 16,
        fontFamily: FONTS.LIGHT,
        lineHeight: 19
    },
    streak: {
        width: 54,
        borderTopWidth: 4,
        borderTopColor: COLORS.COLOR_PRIMARY
    }
})