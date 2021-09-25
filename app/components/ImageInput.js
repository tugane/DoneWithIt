import React, {useEffect} from 'react';
import { Image, StyleSheet, View, TouchableWithoutFeedback, Alert } from 'react-native';
import colors from '../config/colors';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ImageInput({imageUri, onChangeImage}) {
    
    useEffect(()=> {
        requestPermission()
    },[]);

    const requestPermission = async () =>{
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (!granted) {
        alert('You need to enable permission to acces the libarary')
        }
    }

    const handlePress = () => {
        if (!imageUri) selectImage();
        else Alert.alert("Delete","Are you sure you want to delete this image?",[
            {text: 'No'},
            { text: 'Yes', onPress: () => onChangeImage(null)}
        ])
    }
    const selectImage = async () => {
        try {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5
        })
        if (!result.cancelled) {
            onChangeImage(result.uri)
        }
        } catch (error) {
        console.log("Error reading image from libabry", error);
        }
    }
    return (
        <TouchableWithoutFeedback onPress={ handlePress }>
            <View style={styles.container}>
                {!imageUri && <MaterialCommunityIcons color={colors.medium} name="camera" size={60} /> }
                { imageUri && <Image source={{ uri: imageUri }} style={styles.image} /> }
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 15,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        width: 100
    },
    image: {
        width: "100%",
        height: "100%",
    }
})
export default ImageInput