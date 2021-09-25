import React from 'react'
import { StyleSheet, View, Modal } from 'react-native'
import * as Progress from 'react-native-progress'
import colors from '../config/colors'
import LottieView from 'lottie-react-native'

function UploadScreen({ progress = 0, visible = false,onDone }) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                { progress < 1 ?
                    (<Progress.Bar progress={progress} color={colors.primary} width={200} />)
                    :
                    (<LottieView onAnimationFinish={onDone} autoPlay={true} loop={false} style={styles.animation} source={require('../assets/animations/done.json')} />)
                }
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    animation: {
        width: 150
    }
})
export default UploadScreen