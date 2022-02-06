import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    containerHeader: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: '4%',
        backgroundColor: COLORS.COLOR_PRIMARY
    },
    textHeader: {
        fontSize: 16,
        fontFamily: FONTS.REGULAR,
        lineHeight: 19,
        color: COLORS.WRITE,
        marginLeft: 83,
    },
})