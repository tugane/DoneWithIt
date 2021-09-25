import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import colors from '../config/colors'
import { MaterialCommunityIcons } from "@expo/vector-icons";

function NewListingButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="plus-circle" size={40} color={colors.white }/>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.primary,
        borderColor: colors.white,
        height: 80,
        width: 80,
        borderRadius: 40,
        borderWidth: 10,
        justifyContent: "center",
        bottom:30
    }
})
export default NewListingButton