import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import VisitsScreen from '../screens/visitsScreen';
import FavoriteScreen from '../screens/favoriteScreen';
import SettingsScreen from '../screens/settingsScreen';
import VisitDetailScreen from '../screens/visitDetailScreen';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const Bottom = () => {
    return (
        <BottomTab.Navigator
            tabBarOptions={{
                style: { height: 55, paddingTop: 2 }
            }}
        >
            <BottomTab.Screen
                name="Visits"
                component={VisitsScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name={'grid'}
                            size={34}
                            color={focused ? '#2196f3' : '#000'}
                        />
                    ),
                }} />
            <BottomTab.Screen
                name="Favorites"
                component={FavoriteScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name={'heart'}
                            size={34}
                            color={focused ? '#2196f3' : '#000'}
                        />
                    ),
                }} />
            <BottomTab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name={'settings'}
                            size={34}
                            color={focused ? '#2196f3' : '#000'}
                        />
                    ),
                }} />
        </BottomTab.Navigator>
    );
}

const Navigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator >
                <Stack.Screen name="BottomTab" component={Bottom} options={{ headerShown: false }} />
                <Stack.Screen name="VisitsScreen" component={VisitsScreen} options={{ headerShown: false }} />
                <Stack.Screen name="VisitDetailScreen" component={VisitDetailScreen} options={{ headerShown: false }} />
                <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigation;