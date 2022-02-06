import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingTop: 18,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    numbers: {
        flex : 1,
        marginHorizontal: 60,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.WRITE,
        marginHorizontal: 10,
    },
    buttonIsCurrent: {
        backgroundColor: COLORS.COLOR_PRIMARY,
    },
    text: {
        flex:1,
        color: COLORS.COLOR_PRIMARY,
        fontSize: 21,
        fontFamily: FONTS.REGULAR,
        textAlignVertical: 'center',
        lineHeight: 24,
    },
    textIsCurrent: {
        color: COLORS.WRITE,
    },
    pressArrow: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconArrow: {
        width: 12,
        height: 16,
        color: COLORS.COLOR_PRIMARY,
        opacity: 1,
    },
    iconIsArrowDisable: {
        opacity: 0.3,
    }
})

export const buttonCurrent = StyleSheet.compose(styles.button, styles.buttonIsCurrent);
export const textCurrent = StyleSheet.compose(styles.text, styles.textIsCurrent);
export const iconArrowDisabled = StyleSheet.compose(styles.iconArrow, styles.iconIsArrowDisable);