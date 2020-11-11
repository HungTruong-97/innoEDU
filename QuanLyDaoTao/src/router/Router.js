import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import BottomTab from './BottomTab';
import Login from '../components/Login/Login';
import NotificationMessage from '../components/NotificationMessage/NotificationMessage';
import NotificationDetail from '../components/NotificationDetail/NotificationDetail';
import Message from '../components/Message/Message';
import ListStudent from '../components/ListStudent/ListStudent';
import Survey from '../components/Survey/Survey';

const Stack = createStackNavigator();

export default class Router extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="Screen_Login" component={Login} />
                    <Stack.Screen name="Screen_BottomTab" component={BottomTab} />
                    <Stack.Screen name="Screen_NotificationMessage" component={NotificationMessage} />
                    <Stack.Screen name="Screen_NotificationDetail" component={NotificationDetail} />
                    <Stack.Screen name="Screen_Message" component={Message} />
                    <Stack.Screen name="Screen_ListStudent" component={ListStudent} />
                    <Stack.Screen name="Screen_Survey" component={Survey} />

                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

