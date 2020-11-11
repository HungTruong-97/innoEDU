import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Home from '../components/Home/Home';
import Schedule from '../components/Schedule/Schedule';
import Study from '../components/Study/Study';
import More from '../components/More/More';
import Icon from 'react-native-vector-icons/Feather'

const Tab=createMaterialBottomTabNavigator();

export default class BottomTab extends React.Component{
    render(){
        return(
            <Tab.Navigator
                barStyle={{ backgroundColor: '#F4F5F5' }}
                activeColor="#3076F1"
                labeled={true}
            >
                <Tab.Screen name="Screen_Home" component={Home}
                    options={{  
                        title:"Trang chủ",
                        tabBarIcon: ({ color }) => (
                            <Icon name="home" color={color} size={26}/>
                        )
                    }}
                />
                <Tab.Screen name="Screen_Schedule" component={Schedule}
                    options={{  
                        title:"Lịch giảng dạy",
                        tabBarIcon: ({ color }) => (
                            <Icon name="book-open" color={color} size={26}/>
                        )
                    }}
                />
                <Tab.Screen name="Screen_Study" component={Study}
                    options={{  
                        title:"Thống kê giờ dạy",
                        tabBarIcon: ({ color }) => (
                            <Icon name="bar-chart" color={color} size={26}/>
                        )
                    }}
                />
                <Tab.Screen name="Screen_More" component={More}
                    options={{  
                        title:"Thêm",
                        tabBarIcon: ({ color }) => (
                            <Icon name="more-horizontal" color={color} size={26}/>
                        )
                    }}
                />
            </Tab.Navigator>
        );
    }
}