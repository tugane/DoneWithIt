import { useEffect } from 'react';

import * as Notifications from 'expo-notifications';
import expoPushTokens from '../api/expoPushTokens';
import navigation from '../navigation/rootNavigation';

export default useNotifications = (notificationListener) => {
    const lastNotificationResponse = Notifications.useLastNotificationResponse();
    
    useEffect(() => {
        registerForPushNotifications()
        
        if (lastNotificationResponse && lastNotificationResponse.notification) {
           {notificationListener}
        }
    }, [lastNotificationResponse])
    
    const registerForPushNotifications = async () => {
        try {
            const permissions = await Notifications.requestPermissionsAsync();
            if (!permissions.granted) return;

            const token = await Notifications.getExpoPushTokenAsync()
            expoPushTokens.register(token.data)

        } catch (error) {
            console.log('Error getting a push token:', error);
        }
    }

}