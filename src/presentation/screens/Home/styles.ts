import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WRITE,
        paddingTop: getStatusBarHeight() + 17,  
    },
    containerNotFount: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textNotFount: {
        fontSize: 16,
        color: COLORS.COLOR_PRIMARY,
        fontFamily: FONTS.BLACK,
    },
    containerLoading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})