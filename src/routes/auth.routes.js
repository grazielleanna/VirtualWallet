import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Initial from '../pages/Initial';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name="Initial"
                component={Initial} 
                options={{headerShown: false}} 
            />
            <AuthStack.Screen 
                name="SignIn"
                component={SignIn} 
                options={{ 
                    headerStyle: {
                        backgroundColor: '#E5E5E5', 
                        borderBottomWidth: 2, 
                        borderBottomColor: '#322153'}
                    ,
                    headerTintColor: '#322153',
                    headerBackTitleVisible: false,
                    headerTitle: 'Voltar'
                }}
            />
            <AuthStack.Screen 
                name="SignUp" 
                component={SignUp} 
                options={{ 
                    headerStyle: {
                        backgroundColor: '#E5E5E5', 
                        borderBottomWidth: 2, 
                        borderBottomColor: '#322153'}
                    ,
                    headerTintColor: '#322153',
                    headerBackTitleVisible: false,
                    headerTitle: 'Voltar'
                }} 
            />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;