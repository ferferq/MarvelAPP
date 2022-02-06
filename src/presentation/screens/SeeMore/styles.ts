import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WRITE,
        paddingTop: getStatusBarHeight() + 17,
        paddingHorizontal: '4%',
    },
    header: {
        width: '100%',
        paddingVertical: 12,
    },
    icon: {
        color: COLORS.COLOR_PRIMARY,
        fontSize: 20,
    },
    containerInfo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    text: {
        fontSize: 21,
        fontFamily: FONTS.REGULAR,
        lineHeight: 24,
        color: COLORS.GRAY_600,
        marginVertical: 24,
    },
    description: {
        fontSize: 16,
        fontFamily: FONTS.LIGHT,
        color: COLORS.GRAY_600,
    }
})