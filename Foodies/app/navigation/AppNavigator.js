import React from "react";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from 'react-native';

import AccountScreen from "../screens/AccountScreen";
import DetailsNavigation from "./DetailsNavigation";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen 
        name="Home" 
        component={DetailsNavigation}
         options={{
            headerShown: false,
             tabBarIcon:({color,size}) => 
             <View>
                 <MaterialCommunityIcons name="home"  color={color} size={size} />
             </View>
            }}
            />
        <Tab.Screen 
        name="Account" 
        component={AccountScreen} 
        options={{
            headerShown: false,
            tabBarIcon:({color,size}) => 
            <MaterialCommunityIcons name="account" color={color} size={size} />
        }}
        />
    </Tab.Navigator>
)

export default AppNavigator;