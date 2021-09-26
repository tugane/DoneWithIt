import Contants from 'expo-constants'

const settings = {
    dev: {
        apiUrl: "http://172.20.10.4:9000/api"
    },
    staging: {
        apiUrl: "https://dwit-api.herokuapp.com/api"
    },
    prod: {
        apiUrl: "https://dwit-api.herokuapp.com/api"
    },
}

const getCurrentStettings = () => {
    if (__DEV__) return settings.dev
    if (Contants.manifest.releaseChannel === 'staging') return settings.staging 
    return settings.prod
}

export default getCurrentStettings()