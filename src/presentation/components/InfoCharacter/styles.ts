import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 18,
        paddingHorizontal: '4%',
        borderBottomColor: COLORS.COLOR_PRIMARY,
        borderBottomWidth: 1,
    },
    avatar: {
        width: 58,
        height: 58,
        borderRadius: 29,
        marginRight: 25,
    },
    text: {
        flex: 1,
        fontSize: 21,
        fontFamily: FONTS.REGULAR,
        lineHeight: 24,
        color: COLORS.GRAY_600,
    }
})