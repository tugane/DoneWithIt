import Contants from 'expo-constants'

const settings = {
    dev: {
        apiUrl: "http://172.20.10.4:9000/api"
    },
    staging: {
        apiUrl: "http://172.20.10.4:9000/api"
    },
    prod: {
        apiUrl: "http://172.20.10.4:9000/api"
    },
}

const getCurrentStettings = () => {
    if (__DEV__) return settings.dev
    if (Contants.manifest.releaseChannel === 'staging') return settings.staging
    
    return settings.prod
}

export default getCurrentStettings()