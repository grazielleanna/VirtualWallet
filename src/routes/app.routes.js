import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';

const AppTab = createMaterialBottomTabNavigator();

function AppRoutes(){
    return(
        <AppTab.Navigator initialRouteName={"Home"} barStyle={{ backgroundColor: '#322153' }}>
            <AppTab.Screen 
                name="Registrar" 
                component={New} 
                options={{
                    tabBarIcon: ({ color }) => <Icon size={25} name='registered' color={color} />, title: 'Registro'
                }}
            />
            <AppTab.Screen 
                name="Home" 
                component={Home}  
                options={{
                    tabBarIcon: ({ color }) => <Icon size={25} name='home' color={color} />, title: 'Home'
                }}
                actived
            />
            <AppTab.Screen 
                name="Perfil" 
                component={Profile} 
                options={{
                    tabBarIcon: ({ color }) => <Icon size={25} name="user" color={color} />, title: 'Perfil'
                }}
            />
        </AppTab.Navigator>
    )
}

export default AppRoutes;