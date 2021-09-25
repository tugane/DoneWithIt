import React from 'react'
import { StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import { useNetInfo } from '@react-native-community/netinfo'

import colors from '../config/colors'
import AppText from './Text'

function OfflineNotice() {
    const netInfo = useNetInfo()
    if(netInfo.type !=="unknown" && netInfo.isInternetReachable === false)    
    return (
        <View style={styles.container}>
            <AppText  style={styles.text}>No Internet Connction!</AppText>
        </View>
        )
    return null
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.primary,
        height: 50,
        position: "absolute",
        zIndex: 1,
        justifyContent: "center",
        width: "100%",
        top: Constants.statusBarHeight,
    },
    text: {
        fontWeight: '700',
        color: colors.white
    }
})
export default OfflineNotice