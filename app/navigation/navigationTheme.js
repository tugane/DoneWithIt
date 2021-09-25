const { DefaultTheme } = require("@react-navigation/native");
const { default: colors } = require("../config/colors");

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: colors.white
    }
}