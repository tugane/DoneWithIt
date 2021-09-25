import AsyncStorage from "@react-native-async-storage/async-storage"
import dayjs from 'dayjs'
import logger from "./logger"

const prefix = 'cache'
const expiryInMinutes = 5

const store = async (key, value) => {
    try {
        const item = {
            value,
            timestamp: Date.now()
        }
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item))
    } catch (error) {
        logger.log(new Error(error))
    }
}

const isExpared = (item) => {
    const now = dayjs()
    const storedTime = dayjs(item.timestamp)
    return now.diff(storedTime, 'minute') > expiryInMinutes
}

const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(prefix + key)
        const item = JSON.parse(value)

        if (!item) return null

       
        if (isExpared(item)) {
            await AsyncStorage.removeItem(prefix+key)
            return null
        }
        return item.value

    } catch (error) {
        logger.log(new Error(error))
    }
}

export default {
    store,
    get
}