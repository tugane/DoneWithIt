import Contants from 'expo-constants'

const settings = {
    dev: {
        apiUrl: "https://dwit-api.herokuapp.com/api"
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